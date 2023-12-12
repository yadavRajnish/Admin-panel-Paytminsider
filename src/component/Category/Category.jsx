import React, { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [editedCategory, setEditedCategory] = useState(null);
  const [searchCategory, setSearchCategory] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  const fetchCategoryData = () => {
    fetch("http://localhost:8282/get-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data);
        setFilteredCategories(data.data); // Initialize filteredCategories with all categories
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);


  function handleCategoryButton() {
    let AddCategory = document.querySelector(".addcategory");
    AddCategory.style.translate = "0";
  }

  function handleCategorySaveEditedData() {
    if (editedCategory) {
      fetch(`http://localhost:8282/update-categorydata/${editedCategory._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedCategory),
      })
        .then((response) => response.json())
        .then(() => {
          setEditedCategory(null);
          fetchCategoryData();
        })
        .catch((error) => {
          console.error("Error updating category data:", error);
        });
    }
  }

  function handleCategoryDelete(id) {
    setDeleteCategory(id);
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (shouldDelete) {
      fetch(`http://localhost:8282/soft-delete-categorydata/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          fetchCategoryData();
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    }
  }

  function handleCategoryInputChange(e, field) {
    const updatedCategoryData = { ...editedCategory, [field]: e.target.value };
    setEditedCategory(updatedCategoryData);
  }

  function handleCategoryEdit(category) {
    setEditedCategory(category);
  }

  function handleCategoryChange(e) {
    const searchCategoryData = e.target.value.toLowerCase();
    setSearchCategory(searchCategoryData);
    // Filter categories based on the search input and update the filteredCategories state
    const filteredCategories = categories.filter((category) =>
      category.name.toLowerCase().includes(searchCategoryData)
    );
    setFilteredCategories(filteredCategories);
  }

  function handleCategorySearch(e) {
    e.preventDefault();
    // If the search input is empty, show all categories
    if (searchCategory === "") {
      setFilteredCategories(categories);
    }
  }

  return (
    <div className="container mt-4">
      <h2>Categories</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleCategorySearch}>
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search categories"
                onChange={handleCategoryChange}
                value={searchCategory}
              />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 text-end">
          <button className="btn btn-success" onClick={handleCategoryButton}>
            Add Category
          </button>
        </div>
      </div>

      <AddCategory fetchCategoryData={fetchCategoryData} />

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Avatar</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) => (
              <tr key={category._id}>
                <td>{category._id}</td>
                <td>
                  {editedCategory && editedCategory._id === category._id ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editedCategory.name}
                      onChange={(e) => handleCategoryInputChange(e, "name")}
                    />
                  ) : (
                    category.name
                  )}
                </td>
                <td>
                  <img
                    src={`http://localhost:8282/uploads/${category.avatar}`}
                    alt="Avatar"
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{category.createAt.slice(0, 10)}</td>
                <td>
                  {editedCategory && editedCategory._id === category._id ? (
                    <div className="d-flex gap-2 justify-content-center">
                      <button
                        className="btn btn-primary"
                        onClick={handleCategorySaveEditedData}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditedCategory(null)}
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex gap-2 justify-content-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleCategoryDelete(category._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleCategoryEdit(category)}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

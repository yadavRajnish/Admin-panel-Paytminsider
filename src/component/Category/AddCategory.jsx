import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const AddCategory = (props) => {

  const [addCategory, setaddCategory] = useState({
    name: "",
    avatar: "", 
  });

  function handleButton() {
    let addcategory = document.querySelector(".addcategory");
    addcategory.style.translate = "0 -100%";
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setaddCategory({
      ...addCategory,
      avatar: file, 
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddCategory({
      ...addCategory,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('name', addCategory.name);
    // postData.append('description', formData.description);
    postData.append('avatar', addCategory.avatar);
  
    try {
      const response = await axios.post('http://localhost:8282/add-category', postData);
      console.log('Data posted successfully:', response.data);
      setaddCategory({
        name: '',
        // description: '',
        avatar: null,
      });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  // const handleChange = (e, key) => {
  //   setaddCategory({
  //     ...addCategory,
  //     [key]: e.target.value,
  //   });
  // };

//   const handleAddCategory = (e) => {
//     e.preventDefault();
//     // const selectedFile = e.target.files[0];

//     const formData = new FormData();
//     formData.append("name", addCategory.name);
//     formData.append("avatar", selectedFile);
//     formData.append("createdAt", addCategory.createAt);
// if (selectedFile) {
//   formData.append("avatar", selectedFile);
// }
//     fetch("http://localhost:8282/add-category", {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then(() => {
//         setaddCategory({
//           name: formData.name,
//           avatar: formData.avatar,
//         });
//         // setSelectedFile(null)
//         props.fetchCategoryData();
//       })
//       .catch((err) => console.error(err));
//       // console.log('formData:', formData);
//     };

  console.log('addCategory:', addCategory);
  // console.log('selectedFile:', selectedFile);


  return (
    <div
      className="addcategory"
      style={{
        height: "100%",
        width: "100%",
        background: "white",
        zIndex: "10",
        position: "absolute",
        top: "10%",
        left: "0",
        translate: "0 -100%",
        transition: "all .7s",
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex flex-column mt-5 gap-3 text-center">
          <div>
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              onChange={handleChange}
              value={addCategory.name}
              required
              style={{ width: "340px" }}
            />
          </div>
          <div>
            <TextField
              type="file"
              id="avatar"
              name="avatar"
              variant="outlined"
              required
              multiple
              onChange={handleFileChange}
              style={{ width: "340px" }}
            />
          </div>
          {/* You may add fields for createAt or any other category-related information */}
          <div className="d-flex justify-content-center gap-3">
            <div className="mb-5 mt-3">
              <button
                type="submit"
                style={{ padding: "10px 20px", borderRadius: "7px" }}
              >
                Add Category
              </button>
            </div>
            <div className="mb-5 mt-3">
              <button
                onClick={handleButton}
                style={{ padding: "10px 20px", borderRadius: "7px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;

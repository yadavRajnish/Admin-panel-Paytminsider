import React, { useState, useEffect } from "react";
import AddUsers from "./AddUsers";
import "bootstrap/dist/css/bootstrap.min.css";

export default function User() {
  const [users, setUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:8282/get-users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setUsers(data.data);
        setFilteredUsers(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  function handleButton() {
    let addUser = document.querySelector(".addUser");
    addUser.style.translate = "0";
  }

  function saveEditedUserData() {
    setUpdateUser();
    fetch(`http://localhost:8282/update-user/${editedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    })
      .then((response) => response.json())
      .then(() => {
        setEditedUser(null);
        fetchUserData();
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  }

  function deleteUserData(id) {
    setDeleteUser(id);
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (shouldDelete) {
      fetch(`http://localhost:8282/soft-delete-user/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          fetchUserData();
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  }

  function handleInputChange(e, field) {
    const updatedUserData = { ...editedUser, [field]: e.target.value };
    setEditedUser(updatedUserData);
  }

  function handleEdit(user) {
    setEditedUser(user);
  }

  // Updated the function to filter users based on search input
  function handleSearchUsers() {
    const searchUserData = searchUser.toLowerCase();
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(searchUserData)
    );
    setFilteredUsers(filteredData);
  }

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              onChange={(e) => setSearchUser(e.target.value)}
              value={searchUser}
              name="searchUser"
              placeholder="Search users"
            />
            <button
              type="button"
              onClick={handleSearchUsers}
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
        </div>

        <div className="col-md-6 text-end">
          <button className="btn btn-success" onClick={handleButton}>
            Add User
          </button>
        </div>
      </div>

      <AddUsers fetchUserData={fetchUserData} />

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>CreateAt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((users) => (
              <tr key={users?._id}>
                <td>{users?._id}</td>
                <td>
                  <img
                    src={`http://localhost:8282/uploads/${users?.avatar}`}
                    alt="Avatar"
                    style={{
                      height: "35px",
                      width: "35px",
                      // borderRadius: "50%",
                    }}
                  />
                </td>
                <td style={{ width: "fit-content" }}>
                  {editedUser && editedUser?._id === users?._id ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editedUser?.name}
                      onChange={(e) => handleInputChange(e, "name")}
                    />
                  ) : (
                    users?.name
                  )}
                </td>
                <td>
                  {editedUser && editedUser?._id === users?._id ? (
                    <input
                      type="text"
                      value={editedUser.email}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                  ) : (
                    users.email
                  )}
                </td>
                <td>
                  {editedUser && editedUser?._id === users?._id ? (
                    <input
                      type="number"
                      value={editedUser.contact}
                      onChange={(e) => handleInputChange(e, "Contact")}
                    />
                  ) : (
                    users?.contact
                  )}
                </td>

                <td>{users?.createAt?.slice(0, 10)}</td>

                <td className="d-flex gap-2 align-items-center justify-content-center">
                  {editedUser && editedUser?._id === users?._id ? (
                    <>
                      <button
                        onClick={saveEditedUserData}
                        className="btn btn-primary"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditedUser(null)}
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => deleteUserData(users?._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdit(users)}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                    </>
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

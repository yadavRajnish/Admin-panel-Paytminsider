import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function AddUsers(props) {
  let date = new Date();
  const [adduser, setAdduser] = useState({
    createdAt: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
    name: "",
    avatar: "",
    contact: "",
    email: "",
    password: "",
  });

  function handleChange(e, key) {
    setAdduser({
      ...adduser,
      [key]: e.target.value,
    });
  }

  function handleSumbit(e) {
    e.preventDefault();
    const formData = new FormData(); // Create a FormData object
    formData.append("createdAt", adduser.createdAt);
    formData.append("name", adduser.name);
    formData.append("contact", adduser.contact);
    formData.append("email", adduser.email);
    formData.append("password", adduser.password);
    formData.append("avatar", e.target.avatar.files[0]); // Append the avatar file to the formData

    fetch("http://localhost:8282/add-user", {
      method: "POST",
      body: formData, // Send the formData instead of JSON
    })
      .then((res) => res.json())
      .then((newUser) => {
        setAdduser({
          createdAt: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
          name: "",
          avatar: "",
          contact: "",
          email: "",
          password: "",
        });
        props.fetchUserData();
      })
      .catch((err) => console.error(err));
  }

  function handleButton() {
    let addUser = document.querySelector(".addUser");
    addUser.style.translate = "0 -100%";
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "white",
        zIndex: "10",
        position: "absolute",
        top: "0",
        left: "0",
        translate: "0 -100%",
        transition: "all .7s",
      }}
      className="addUser"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <form onSubmit={(e) => handleSumbit(e)}>
          <div className="d-flex flex-column mt-5 gap-3 text-center">
            <div>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={(e) => handleChange(e, "name")}
                value={adduser.name}
                required
                style={{ width: "340px" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Contact"
                variant="outlined"
                onChange={(e) => handleChange(e, "contact")}
                value={adduser.contact}
                required
                style={{ width: "340px" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => handleChange(e, "email")}
                value={adduser.email}
                required
                style={{ width: "340px" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e) => handleChange(e, "password")}
                value={adduser.password}
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
                onChange={(e) =>
                  setAdduser({
                    ...adduser,
                    avatar: URL.createObjectURL(e.target.files[0]),
                  })
                }
                style={{ width: "340px" }}
              />
            </div>

            <div className="d-flex justify-content-center gap-3">
              <div className="mb-5 mt-3">
                <button
                  type="submit"
                  style={{ padding: "10px 20px", borderRadius: "7px" }}
                >
                  Add User
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
    </div>
  );
}

import { TextField } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

export default function EmployeeMangement() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    city: "",
    description: "",
  });

  const [rows, setRows] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "firstName", headerName: "First Name", width: 180 },
    { field: "lastName", headerName: "Last Name", width: 180 },
    { field: "contact", headerName: "Contact", width: 180 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "city", headerName: "City", width: 180 },
    { field: "description", headerName: "Description", width: 180 },
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  function handleSumbit(event) {
    event.preventDefault();

    const newRow = {
      id: rows.length + 1,
      ...formState,
    };

    setRows([...rows, newRow]);

    setFormState({
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      city: "",
      description: "",
    });
  }

  return (
    <div className="container-fluid">
      <form className="d-flex m-3 row" onSubmit={handleSumbit}>
        <div className="col-3 mb-3">
          <TextField
            label="First name"
            variant="outlined"
            onChange={handleChange}
            value={formState.firstName}
            name="firstName"
            required
          ></TextField>
        </div>
        <div className="col-3 mb-3">
          <TextField
            label="Last Name"
            variant="outlined"
            onChange={handleChange}
            value={formState.lastName}
            name="lastName"
            required
          ></TextField>
        </div>
        <div className="col-3 mb-3">
          <TextField
            label="Contact"
            type="number"
            variant="outlined"
            onChange={handleChange}
            value={formState.contact}
            name="contact"
            required
          ></TextField>
        </div>
        <div className="col-3 mb-3">
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            value={formState.email}
            name="email"
            required
          ></TextField>
        </div>
        <div className="col-3 mb-3">
          <TextField
            label="City"
            variant="outlined"
            onChange={handleChange}
            value={formState.city}
            name="city"
            required
          ></TextField>
        </div>
        <div className="col-3 mb-3">
          <TextField
            label="Description"
            variant="outlined"
            onChange={handleChange}
            value={formState.description}
            name="description"
            required
          ></TextField>
        </div>
        <div className="text-center">
          <Button
            variant="outlined"
            size="medium"
            className="col-2"
            type="submit"
          >
            ADD
          </Button>
        </div>
      </form>

      <div style={{ height: 370, width: "95%", margin: "28px auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialSta7e={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

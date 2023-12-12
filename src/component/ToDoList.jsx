import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ToDoList() {
  const [listItem, setListItem] = useState("");
  const [storeItem, setStoreItem] = useState([]);
  const [emptyItem, setEmptyItem] = useState("");
  const [totalTask, setTotalTask] = useState(Number());

  const textChange = (event) => {
    setListItem(event.target.value);
  };

  const handleSubmit = (value) => {
    setEmptyItem("");
    if (listItem.length >= 1) {
      setStoreItem((previousItem, index) => {
        return [...previousItem, listItem];
      });
        setTotalTask(Number(totalTask + 1));
    } else {
      setEmptyItem("Please Add the Item");
    }
    setListItem("");
  };

  const deleteItem = (id) => {
    console.log(id);
    setStoreItem((previousItem) => {
      return previousItem.filter((ele, index) => {
        return index !== id;
      });
    });
    setTotalTask(Number(totalTask - 1));
  };

  return (
    <div
      className="border m-auto px-5"
      style={{
        width: "600px",
        minHeight: "400px",
        transform: "translateY(5%)",
        boxShadow: "0px 6px 15px rgba(0 0 0/10%)",
        background: "#f1f1f1",
        transition: "all 1s",
      }}
    >
      <h3 className="text-uppercase pb-3 text-center mt-3">Add to Your List</h3>
      <div>
        <div className="d-flex align-items-center justify-content-between pb-2">
          <TextField
            value={listItem}
            id="standard-basic"
            onChange={textChange}
            label="Add Your List"
            variant="standard"
            sx={{ width: "100%"}}
          />
          <Button onClick={handleSubmit} variant="text">
            <SendAndArchiveIcon sx={{ fontSize: "30px", color: "#666666" }} />
          </Button>
        </div>
        <div className="d-flex justify-content-between">
        <p>Total List : {totalTask}</p>
        <p className="text-end pe-5 text-danger">{emptyItem}</p>
        </div>
      </div>
      {storeItem.map((itmeValue, index) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            key={index}
          >
            <div
              className="py-2 m-2 text-uppercase"
              style={{ fontSize: "20px", width: "100%" }}
            >
              {itmeValue}
            </div>
            <Button variant="text" onClick={() => deleteItem(index)}>
              <DeleteForeverIcon sx={{ color: "red", fontSize: "30px" }} />
            </Button>
          </div>
        );
      })}
    </div>
  );
}

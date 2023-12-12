import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEvents from "./AddEvents";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {
  const [eventdata, setEventData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(""); // State for the search input
  const [deleteEvent, setDeleteEvent] = useState(null);
  const itemsPerPage = 6; // Number of items to display per page

  const navigate = useNavigate();

  const fetchEventData = () => {
    fetch("http://localhost:8282/get-events")
      .then((res) => res.json())
      .then((response) => {
        setEventData(response.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text?.slice) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  function handleCategoryButton() {
    let AddCategory = document.querySelector(".addcategory");
    AddCategory.style.translate = "0";
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let filteredData = eventdata;

  if (searchText) {
    filteredData = eventdata.filter((event) =>
      event.tittle.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  function deleteEventData(id) {
    setDeleteEvent(id);
    console.log(id);
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this Event ?"
    );
    if (shouldDelete) {
      axios
        .delete(`http://localhost:8282/soft-delete-event/${id}`)
        .then(() => {
          fetchEventData();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  const handleEditEvent = (event) => {
    // console.log(event)
    navigate(`/events/edit/${event}`);
  };

  return (
    <div>
      <div className="search-container m-2">
        <h2>Events</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search by Product name"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>

          <div className="col-md-6 text-end">
            <button className="btn btn-success">
              <Link
                to={"/events/addevent"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Add Event
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Event Tag</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Location</th>
              <th>Price</th>
              <th>Age</th>
              <th>Language</th>
              <th>CreateAt</th>
              <th>About</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((event, ind) => (
              <tr key={ind}>
                <td>
                  <img
                    src={`http://localhost:8282/uploads/${event.image}`}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{truncateText(event.tittle, 20)}</td>
                <td>{event.eventTag}</td>
                <td>{event.startDate ? event.startDate.slice(0, 10) : ""}</td>
                <td>{event.endDate ? event.endDate.slice(0, 10) : ""}</td>
                <td>{truncateText(event.location, 20)}</td>
                <td>{event.price}</td>
                <td>{event.age}</td>
                <td>{truncateText(event.language, 20)}</td>
                <td>{event.createAt.slice(0, 10)}</td>
                <td>{truncateText(event.about, 20)}</td>
                <td className="d-flex gap-2 align-items-center justify-content-center">
                  <button
                    onClick={() => deleteEventData(event?._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleEditEvent(event._id)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination">
          {Array.from({
            length: Math.ceil(filteredData.length / itemsPerPage),
          }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Events;

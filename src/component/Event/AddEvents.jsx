import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEvents = () => {
  const [category, setCategory] = useState([]);

  const [addEvent, setAddEvent] = useState({
    tittle: "",
    categoryId: "",
    eventTag: "",
    eventMode: "",
    startDate: "",
    endDate: "",
    time: "",
    location: "",
    price: "",
    age: "",
    language: "",
    livePerformance: "",
    image: "",
    venue: "",
    about: "",
  });

  let navigate = useNavigate();

  const handleButton = () => {
    // Handle your button click logic here
    navigate("/events")
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
    }

    // Check if the 'categorySelect' element exists in the document
    const categorySelect = document.querySelector("[name='categorySelect']");
    if (categorySelect) {
      const selectedCategoryId = categorySelect.value;
      formData.append("categoryId", selectedCategoryId);
    } else {
      console.error("Element with name 'categorySelect' not found.");
      // Handle the error or provide a default value for categoryId if needed.
    }

    setAddEvent({
      ...addEvent,
      image: formData,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "categorySelect") {
      // Updated to use the new name "categorySelect"
      setAddEvent({
        ...addEvent,
        categoryId: value,
      });
    } else {
      setAddEvent({
        ...addEvent,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();

    for (const key in addEvent) {
      if (key === "categoryId") {
        // Assuming you have a select element with the name "categorySelect" for selecting the category.
        const selectedCategoryId = document.querySelector(
          "[name='categorySelect']"
        ).value;
        postData.append("categoryId", selectedCategoryId);
      } else if (key === "image" && addEvent[key] instanceof FormData) {
        const images = addEvent[key].getAll("image");
        for (let i = 0; i < images.length; i++) {
          postData.append("image", images[i]);
        }
      } else {
        postData.append(key, addEvent[key]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:8282/add-event",
        postData
      );

      if (response.status === 200) {
        setAddEvent({
          tittle: "",
          categoryId: "",
          eventTag: "",
          eventMode: "",
          startDate: "",
          endDate: "",
          time: "",
          location: "",
          price: "",
          age: "",
          language: "",
          livePerformance: "",
          venue: "",
          image: null,
          about: "",
        });
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8282/get-categories")
      .then((res) => {
        let carData = res.data.data;
        setCategory(carData);
        // console.log(carData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="text-center">
      <h1>Add Event</h1>
      <Form
        onSubmit={handleSubmit}
        className="d-flex gap-3 text-center justify-content-center"
      >
        <div
          className="d-flex flex-column mt-5 gap-3 text-center justify-content-center"
          style={{ width: "70vw" }}
        >
          <div className="d-flex gap-3">
            <Form.Control
              type="text"
              name="tittle"
              placeholder="Tittle"
              onChange={handleChange}
              value={addEvent.tittle}
            />
            <Form.Group controlId="categorySelect" style={{ width: "75vw" }}>
              <Form.Control
                as="select"
                name="categorySelect"
                // name="categoryId"
                onChange={handleChange}
                value={addEvent.categoryId}
              >
                {category?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Control
              type="text"
              name="eventTag"
              placeholder="EventTag"
              onChange={handleChange}
              value={addEvent.eventTag}
            />
          </div>
          <div className="d-flex gap-3">
            <Form.Control
              type="text"
              name="eventMode"
              placeholder="EventMode"
              onChange={handleChange}
              value={addEvent.eventMode}
            />
            <Form.Control
              type="text"
              name="startDate"
              placeholder="StartDate"
              onChange={handleChange}
              value={addEvent.startDate}
            />
            <Form.Control
              type="text"
              name="endDate"
              placeholder="EndDate"
              onChange={handleChange}
              value={addEvent.endDate}
            />
          </div>

          <div className="d-flex gap-3">
            <Form.Control
              type="text"
              name="time"
              placeholder="Time"
              onChange={handleChange}
              value={addEvent.time}
            />
            <Form.Control
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleChange}
              value={addEvent.location}
            />
            <Form.Control
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              value={addEvent.price}
            />
          </div>

          <div className="d-flex gap-3">
            <Form.Control
              type="text"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              value={addEvent.age}
            />
            <Form.Control
              type="text"
              name="language"
              placeholder="Language"
              onChange={handleChange}
              value={addEvent.language}
            />
            <Form.Control
              type="text"
              name="livePerformance"
              placeholder="LivePerformance"
              onChange={handleChange}
              value={addEvent.livePerformance}
            />
          </div>

          <div className="d-flex gap-3">
            <Form.Control
              type="text"
              name="venue"
              placeholder="Venue"
              onChange={handleChange}
              value={addEvent.venue}
            />
            <Form.Group controlId="outlined-image">
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
              />
            </Form.Group>
          </div>

          <div className="d-flex gap-3" style={{ height: "20vh" }}>
            <Form.Control
              as="textarea"
              name="about"
              placeholder="About"
              onChange={handleChange}
              value={addEvent.about}
            />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <Button
              type="submit"
              style={{ padding: "10px 20px", borderRadius: "7px" }}
            >
              Add Event
            </Button>
            <Button
              onClick={handleButton}
              style={{ padding: "10px 20px", borderRadius: "7px" }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddEvents;

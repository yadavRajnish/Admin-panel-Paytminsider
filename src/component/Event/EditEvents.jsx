import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const EditEvents = () => {
  let { eventId } = useParams();
  let navigate = useNavigate();

  const [eventData, setEventData] = useState({
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
    onlineVideo: "",
    description: "",
    socialLink: "",
  });

  const [originalEventData, setOriginalEventData] = useState({});
  const [imageFile, setImageFile] = useState(null);

  // console.log({eventId : event});
  useEffect(() => {
    axios
      .get(`http://localhost:8282/get-event-by-eventid/${eventId}`)
      .then((response) => {
        const eventData = response.data.data[0];
        console.log(eventData);
        setEventData(eventData);
        setOriginalEventData(eventData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [eventId]);

  // const handleEditEvent = async () => {
  //   try {
  //     const isConfirmed = window.confirm("Are you sure you want to save the editable data?");
  //     const formData = new FormData();

  //     // Add the updated event data to the FormData
  //     for (const key in eventData) {
  //       formData.append(key, eventData[key]);
  //     }

  //     // Add the new image file, if selected
  //     if (imageFile) {
  //       formData.append("image", imageFile);
  //     }

  //     // Send a PUT request with the FormData
  //     const response = await axios.put(
  //       `http://localhost:8282/update-event/${eventId}`,
  //       formData
  //     );

  //     // Handle the response as needed
  //   } catch (error) {
  //     console.error("Error updating event data:", error);
  //   }
  // };

  const handleEditEvent = async () => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to save the editable data?"
    );
    if (!isConfirmed) {
      return; // If not confirmed, do nothing
    }

    try {
      const formData = new FormData();

      // Add the updated event data to the FormData
      for (const key in eventData) {
        formData.append(key, eventData[key]);
      }

      // Add the new image file, if selected
      if (imageFile) {
        formData.append("image", imageFile);
      }

      // Send a PUT request with the FormData
      const response = await axios.put(
        `http://localhost:8282/update-event/${eventId}`,
        formData
      );

      // Handle the response as needed
    } catch (error) {
      console.error("Error updating event data:", error);
    }
  };

  const handleCancelEdit = () => {
    navigate("/events")
    // setEventData(originalEventData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="text-center">
      <h2 className="mt-2">Edit Event</h2>
      <form className=" d-flex justify-content-center">
        <div
          className="d-flex flex-column mt-5 gap-3 text-center justify-content-center"
          style={{ width: "70vw" }}
        >
          <div className="d-flex gap-3">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Tittle</InputGroup.Text>
              <Form.Control
                type="text"
                name="tittle"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.tittle}
              />
            </InputGroup>

            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                Event Tag
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="eventTag"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.eventTag}
                disabled
              />
            </InputGroup>
          </div>

          <div className="d-flex gap-3">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                Event Mode
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="eventTag"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.eventMode}
              />
            </InputGroup>

            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                Start Date
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="startDate"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={
                  eventData.startDate ? eventData.startDate.slice(0, 10) : ""
                }
              />
            </InputGroup>
          </div>

          <div className="d-flex gap-3">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">End Date</InputGroup.Text>
              <Form.Control
                type="text"
                name="endDate"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData?.endDate ? eventData?.endDate?.slice(10) : ""}
              />
            </InputGroup>

            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Time</InputGroup.Text>
              <Form.Control
                type="text"
                name="time"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.time}
              />
            </InputGroup>
          </div>

          <div className="d-flex gap-3">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Location</InputGroup.Text>
              <Form.Control
                type="text"
                name="location"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.location}
              />
            </InputGroup>

            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Price</InputGroup.Text>
              <Form.Control
                type="text"
                name="price"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.price}
              />
            </InputGroup>
          </div>

          <div className="d-flex gap-3">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Age</InputGroup.Text>
              <Form.Control
                type="text"
                name="age"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.age}
              />
            </InputGroup>

            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Language</InputGroup.Text>
              <Form.Control
                type="text"
                name="language"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.language}
              />
            </InputGroup>
          </div>

          <div className="d-flex gap-3">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                Live Performance
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="livePerformance"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.livePerformance}
              />
            </InputGroup>

            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Image</InputGroup.Text>
              <Form.Control
                type="file"
                name="image"
                aria-describedby="inputGroupPrepend"
                onChange={handleImageChange}
              />
            </InputGroup>
          </div>

          <div className="d-flex gap-3">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Venue</InputGroup.Text>
              <Form.Control
                type="text"
                name="venue"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.venue}
              />
            </InputGroup>

            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">About</InputGroup.Text>
              <Form.Control
                as="textarea"
                name="about"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                value={eventData.about}
              />
            </InputGroup>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button
              type="button"
              onClick={handleCancelEdit}
              style={{ padding: "10px 20px", borderRadius: "7px" }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                handleEditEvent();
                navigate("/events");
              }}
              style={{ padding: "10px 20px", borderRadius: "7px" }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEvents;

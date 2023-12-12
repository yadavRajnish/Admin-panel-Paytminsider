import React, { useState } from "react";
import MultiButton from "./MultiButton";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DropDown from "./DropDown";
import Button from "@mui/material/Button";
import Calendar from "./Calendar";
import Time from "./Time";
import { TextField } from "@mui/material";
import partycone from "./partycone.jpg";

export default function MultiForm() {
  const [slider, setSlider] = useState(true);
  const [slide, setSlide] = useState(1);
  const [service, setService] = React.useState("");
  const [employee, setEmployee] = React.useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const serviceArray = ["Box", "Cardio", "Meditation", "Crossfit", "Yoga"];
  const employeeArray = [
    "Alec Whitten",
    "Alexa Rollins",
    "Kasey Burt",
    "Raymond Atkins",
    "Tyrone Lewis",
  ];
  const price = { Box: 15, Cardio: 20, Meditation: 25, Crossfit: 30, Yoga: 40 };

  function handleslider() {
    if (slide === 5) {
      setSlide(1);
      setService("");
      setEmployee("");
      setDate(null);
      setTime(null);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
    } else {
      setSlide(slide + 1);
    }
  }

  const collapseButton = {
    position: "absolute",
    bottom: "0",
    left: "0",
    height: "50px",
    border: "1px solid",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "5px 30px",
    boxSizing: "border-box",
    textAlign: "center",
    // background:'red'
  };

  const mainButton = {
    border: "1px solid gray",
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "49px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    paddingRight: "20px",
    background: "white",
    // zIndex: "200",
  };

  return (
    <div>
      <div
        style={{
          height: "75vh",
          width: "fit-content",
          border: "1px solid",
          margin: "1.9% auto",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative" }}>
          <div style={{ padding: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <MultiButton
                slider={slider}
                icon={<LocalMallIcon />}
                text="Service Selection"
                isActive={slide > 1}
              />
            </div>

            <MultiButton
              slider={slider}
              icon={<EventNoteIcon />}
              text="Date & Time"
              isActive={slide > 2}
            />
            <MultiButton
              slider={slider}
              icon={<PersonIcon />}
              text="Your Information"
              isActive={slide > 3}
            />
            <MultiButton
              slider={slider}
              icon={<PaymentIcon />}
              text="Payments"
              isActive={slide > 4}
            />
          </div>

          <div
            style={collapseButton}
            onClick={() => setSlider((slider) => (slider ? false : true))}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              <p>{slider ? "Collpase menu" : <></>}</p>
              <p>
                {slider ? <ArrowCircleLeftIcon /> : <ArrowCircleRightIcon />}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "100%",
            width: "550px",
            border: "1px solid",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div>
            <div>
              {slide === 1 && (
                <div style={{ height: "450px" }}>
                  <div
                    className="text-center d-flex align-items-center justify-content-center"
                    style={{ height: "100%" }}
                  >
                    <DropDown
                      array={serviceArray}
                      label="Service"
                      data={service}
                      setData={setService}
                    />
                    <DropDown
                      array={employeeArray}
                      label="Employee"
                      data={employee}
                      setData={setEmployee}
                    />
                  </div>
                </div>
              )}

              {slide === 2 && (
                <div style={{ overflowY: "scroll", height: "500px" }}>
                  <Calendar data={date} setData={setDate} />
                  <Time data={time} setData={setTime} />
                </div>
              )}

              {slide === 3 && (
                <div>
                  <div className="p-4 row row-cols-1 text-center mt-4 g-4 mb-auto">
                    <div className="col">
                      <TextField
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text"
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                      />
                    </div>
                    <div className="col">
                      <TextField
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        type="text"
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                      />
                    </div>
                    <div className="col">
                      <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                    </div>
                    <div className="col">
                      <TextField
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number"
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
              )}

              {slide === 4 && (
                <div>
                  <h3>Summary</h3>
                  <div className="border m-3 p-4 rounded">
                    <div className="border rounded m-2 p-3">
                      <p>Service</p>
                      <div className="d-flex justify-content-between ">
                        <p>{`${service} with ${employee} ($${price[service]}.00) x 1 person`}</p>
                        <p>{`$ ${price[service]}.00 `}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <h5>Subtotal : </h5>
                      <h5>{`$ ${price[service]}.00 `}</h5>
                    </div>
                    <div
                      style={{ border: " 1px dashed gray", width: "100%" }}
                    ></div>
                    <div
                      className="d-flex mt-4 justify-content-between"
                      style={{
                        height: "50px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p>Coupon : </p>
                      {/* <div className="border" ></div> */}
                      <input type="text" style={{ width: "75%" }} />
                      <button>Add</button>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <h5>Total Amount : </h5>
                      <h5>{`$ ${price[service]}.00 `}</h5>
                    </div>
                  </div>
                  <h4 className="text-center">
                    The payment will be done on-site.
                  </h4>
                </div>
              )}

              {slide === 5 && (
                <div>
                  <div className="px-4">
                    <div className="text-center">
                      <img
                        src={partycone}
                        alt=""
                        style={{ height: "70px", width: "70px" }}
                      />
                      <h5>Congratulations</h5>
                      <p>
                        Appointment ID #
                        <span>{Math.floor(Math.random() * 10) + 50}</span>
                      </p>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <p style={{ color: "gray" }}>Date :</p>
                        <p>{date.toDate().toString().slice(0, 15)}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p style={{ color: "gray" }}>Local Time :</p>
                        <p>{time.toDate().toString().slice(16, 21)}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p style={{ color: "gray" }}>Service :</p>
                        <p>{service}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p style={{ color: "gray" }}>Employee :</p>
                        <p>{employee}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p style={{ color: "gray" }}>Payment :</p>
                        <p>{`$ ${price[service]}.00 `}</p>
                      </div>
                      <div className="border my-2"></div>
                      <div className="d-flex justify-content-between">
                        <p style={{ color: "gray" }}>Your Name :</p>
                        <p>
                          {firstname} {lastname}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p style={{ color: "gray" }}>Email Address</p>
                        <p>{email}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p style={{ color: "gray" }}>Phone Number</p>
                        <p>{phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div style={mainButton}>
              <Button
                style={{ background: "rgba(204, 255, 2, 100)", color: "black" }}
                onClick={handleslider}
                variant="contained"
                disabled={
                  !(
                    (slide === 1 && service && employee) ||
                    (slide === 2 && date && time) ||
                    slide === 3 ||
                    slide === 4 ||
                    slide === 5
                  )
                }
              >
                {slide === 5 ? "Finish" : "Continue"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

const formStyle = {
  padding: "20px",
  borderRadius: "5px",
  width: "70%",
};

const formIcon = {
padding:'10px',
marginRight:'20px',
fontSize: '36px', 
}

export default function ContactPage() {
  return (
    <div>
      <div className="center text-center m-5">
        <h1 className="mt-5">Contact</h1>
        <p>Get in Touch</p>
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ ...formContainerStyle, width: "50%" }}>
          <div style={formStyle}>
            <form action="https://formspree.io/f/moqorljy" method="POST">
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your message"
                    cols="30"
                    rows="4"
                    autoComplete="off"
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>

        <div style={{ borderLeft: "1px solid grey", width: "50%" }}>
          <div style={{height:'100%', marginLeft:'100px'}} className="d-flex flex-column justify-content-evenly align-items-start">
            <div className="d-flex justify-content-start align-items-start">
              <h1 style={formIcon}>
                <PlaceIcon style={{fontSize :'36px'}}/>
              </h1>
              <div>
                <h3>Location</h3>
                <div>Mumbai</div>
              </div>
            </div>

            <div className="d-flex justify-content-start align-items-start">
            <h1 style={formIcon}>
                <LocalPhoneIcon style={{fontSize :'36px'}} />
              </h1>
              <div>
                <h3>Phone</h3>
                <div>8692965123</div>
              </div>
            </div>

            <div className="d-flex justify-content-start align-items-start">
            <h1 style={formIcon}>
                <EmailIcon style={{fontSize :'36px'}}/>
              </h1>
              <div>
                <h3>Email</h3>
                <div>rajnishyadav5509@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

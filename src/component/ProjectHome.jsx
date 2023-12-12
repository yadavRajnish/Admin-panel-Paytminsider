import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import todolistImage from "../Images/TodoList.png";
import stopWatchImage from "../Images/Screenshot 2023-08-16 073226.png";
import multiformImage from "../Images/multiform-img.png";
import carouselImage from "../Images/carouselSlider.webp";
import Currancyconvertor from "../Images/currancyconvertor.png";
import employeeMgmtImg from '../Images/employee_mgmt.png'

export default function ProjectHome() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <Link to="/project/todolist">
                    <img
                      src={todolistImage}
                      alt="TodoList"
                      className="project-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <Link to="/project/stopwatch">
                    <img
                      src={stopWatchImage}
                      alt="StopWatch_Image"
                      className="project-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <Link to="/project/gymform">
                    <img
                      src={multiformImage}
                      alt="multiformImage"
                      className="project-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <Link to="/project/carousel">
                    <img
                      src={carouselImage}
                      alt="carouselImage"
                      className="project-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <Link to="/project/currancy">
                    <img
                      src={Currancyconvertor}
                      alt="Currancy convertor"
                      className="project-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <Link to="/project/employee-management">
                    <img
                      src={employeeMgmtImg}
                      alt="Employee management"
                      className="project-image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProjectButton from "../component/ProjectButton";

export default function ProjectPage() {
  return (
    <>
      <Link to="/project"><ProjectButton title="Project Home"/></Link>
      <Outlet />
    </>
  );
}

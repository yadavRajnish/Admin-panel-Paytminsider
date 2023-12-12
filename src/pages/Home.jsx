import React from "react";
import SideNav from "../component/SideNav";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
          <Outlet/>
        </Box>
      </Box>
    </>
  );
}

import React from 'react'
import SideNav from "../component/SideNav";
import Box from "@mui/material/Box";


export default function PortFolioPage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
          <h1>This is Portfolio page</h1>
        </Box>
      </Box>
    </>
  );
}

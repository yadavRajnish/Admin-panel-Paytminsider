import React from "react";

export default function MultiButton({ slider, icon, text, isActive }) {
  const badgeIcon = {
    position: "absolute",
    bottom: "0",
    right: "0",
    transform: "translate(50%,50%)",
    scale: "1.5",
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid gray",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        width: `${slider ? "220px" : "fit-content"}`,
        padding: "0 10px",
        height: "50px",
        marginBottom: "15px",
      }}
    >
      <div> {icon}</div>
      <div
        style={{marginTop:'10px'}}
      >
        {slider && <p>{text}</p>}
      </div>
      <div>
        <input
          checked={isActive}
          type="checkbox"
          style={slider ? { scale: "2" } : badgeIcon}
        />
      </div>
    </div>
  );
}

import React from "react";
import adminLogo from "../assets/adminLogo.png";

const Admin = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "80vh",
      }}>
      <img height='auto' width='auto' src={adminLogo} alt='kalafex Logo' />
    </div>
  );
};

export default Admin;

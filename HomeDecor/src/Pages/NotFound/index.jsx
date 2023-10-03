import React from "react";
import "./not-found.css";
import Nav from "../../Components/Nav";

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="not_found">
        <p>404</p>
        <p>PAGE NOT FOUND</p>
      </div>
    </>
  );
};

export default NotFound;

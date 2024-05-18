import React from "react";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <div className="error-404-page">
        <div className="container">
          <div className="error-404">404</div>
          <div className="message">
            Oops! The page you are looking for cannot be found.
          </div>
          <div className="home-button">
            <a href="/">Go Home</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;

import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./side.module.css";

const Aside = () => {
  return (
    <>
      <div className={classes.dashboard}>
        <div className="flex-container">
          {" "}
          {/* Ensure this container uses flex display */}
          <aside className="sidebar">
            <div className="menu">
              <div className="menu-item">Posts</div>
              <div className="menu-item">Schedules</div>
              <div className="menu-item">Income</div>
              {/* {user.name} */}
            </div>
          </aside>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Aside;

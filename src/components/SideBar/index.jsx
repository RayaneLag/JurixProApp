import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import classes from "./side.module.css";
import Swal from "sweetalert2";
import Nav from "../navbar";
import { logout } from "../../app/Slices/UserSlice";
import { useDispatch } from "react-redux";

const Aside = () => {
  const NAV = useNavigate();
  const dispatch = useDispatch();

  function handleClick(props) {
    NAV(`/${props}`);
  }

  return (
    <>
      <div className={classes.dashboard}>
        <div className="flex-container">
          {" "}
          {/* Ensure this container uses flex display */}
          <aside className="sidebar">
            <div className={classes.menu}>
              <div onClick={() => handleClick("Home")} className="menu-item">
                Home
              </div>
              <div onClick={() => handleClick("Chatweb")} className="menu-item">
                Chatbot
              </div>
              <div onClick={() => handleClick("planner")} className="menu-item">
                Planner
              </div>
              <div
                onClick={() => handleClick("Settings")}
                className="menu-item"
              >
                settings
              </div>
              <div
                className="menu-item"
                onClick={() =>
                  Swal.fire({
                    title: "Are you sure?",
                    text: "you wanna logout!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "logout",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "logout done",
                        text: "Have a nice day",
                        icon: "success",
                      });
                      dispatch(logout());
                      NAV("/Home");
                    }
                  })
                }
              >
                {" "}
                Logout
              </div>
            </div>
          </aside>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Aside;

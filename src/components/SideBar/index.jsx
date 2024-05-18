import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { logout } from "../../app/Slices/UserSlice";
import classes from "./side.module.css";
import {
  FaHome,
  FaRobot,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Aside = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (props) => {
    navigate(`/${props}`);
  };

  return (
    <div className={classes.dashboard}>
      <aside className={classes.sidebar}>
        <div className={classes.menu}>
          <div onClick={() => handleClick("Home")} className={classes.menuItem}>
            <FaHome className={classes.menuItemIcon} /> Home
          </div>
          <div
            onClick={() => handleClick("Chatweb")}
            className={classes.menuItem}
          >
            <FaRobot className={classes.menuItemIcon} /> Chatbot
          </div>
          <div
            onClick={() => handleClick("planner")}
            className={classes.menuItem}
          >
            <FaCalendarAlt className={classes.menuItemIcon} /> Planner
          </div>
          <div
            onClick={() => handleClick("Settings")}
            className={classes.menuItem}
          >
            <FaCog className={classes.menuItemIcon} /> Settings
          </div>
          <div
            className={classes.menuItem}
            onClick={() =>
              Swal.fire({
                title: "Are you sure?",
                text: "Do you want to logout?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Logout",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Logout done",
                    text: "Have a nice day",
                    icon: "success",
                  });
                  dispatch(logout());
                  navigate("/Home");
                }
              })
            }
          >
            <FaSignOutAlt className={classes.menuItemIcon} /> Logout
          </div>
        </div>
      </aside>
      <div className={classes.flexContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Aside;

// const Aside = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleClick = (props) => {
//     navigate(`/${props}`);
//   };

//   return (
//     <div className={classes.dashboard}>
//       <aside className={classes.sidebar}>
//         <div className={classes.menu}>
//           <div onClick={() => handleClick("Home")} className={classes.menuItem}>
//             Home
//           </div>
//           <div
//             onClick={() => handleClick("Chatweb")}
//             className={classes.menuItem}
//           >
//             Chatbot
//           </div>
//           <div
//             onClick={() => handleClick("planner")}
//             className={classes.menuItem}
//           >
//             Planner
//           </div>
//           <div
//             onClick={() => handleClick("Settings")}
//             className={classes.menuItem}
//           >
//             Settings
//           </div>
//           <div
//             className={classes.menuItem}
//             onClick={() =>
//               Swal.fire({
//                 title: "Are you sure?",
//                 text: "Do you want to logout?",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Logout",
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                   Swal.fire({
//                     title: "Logout done",
//                     text: "Have a nice day",
//                     icon: "success",
//                   });
//                   dispatch(logout());
//                   navigate("/Home");
//                 }
//               })
//             }
//           >
//             Logout
//           </div>
//         </div>
//       </aside>
//       <div className={classes.flexContainer}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Aside;

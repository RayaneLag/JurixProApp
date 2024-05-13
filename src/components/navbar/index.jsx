// import React from "react";
import { NavItems } from "../../config";
import { Link, Outlet, useNavigate } from "react-router-dom";
import classes from "./nav.module.css";
import HoverCardDemo from "../hoverCard";
import { ChevronDown } from "lucide-react";

const Nav = () => {
  const Navigate = useNavigate();

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logoContainer}>
          <img
            src="/logo_jurixPro-removebg-preview.png"
            alt="LOGO"
            className={classes.logo}
            onClick={() => Navigate("/")}
          />
          <p>JurixPro</p>
        </div>
        <div className={classes.navItems}>
          {NavItems.map((item, i) => {
            if (item.expand) {
              return (
                <div className={classes.alpha} key={i}>
                  <HoverCardDemo title={item.title} navchild={item.children} />
                  <ChevronDown />
                </div>
              );
            } else {
              // Gestion des éléments normaux et du bouton
              return item.button ? (
                // Si l'élément est un bouton
                <button
                  className={classes.button}
                  onClick={() => Navigate(item.href)}
                >
                  {item.title}
                </button>
              ) : (
                // Si l'élément est un lien
                <Link to={item.href} className="nav-link">
                  {item.title}
                </Link>
              );
            }
          })}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;

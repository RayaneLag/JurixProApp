// import React from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";
import classes from "./nav.module.css";
import HoverCardDemo from "../hoverCard";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";

const Nav = () => {
  const Navigate = useNavigate();

  const isauth = useSelector((state) => state.user?.IslogedIn);
  console.log(isauth, "test");
  const username = useSelector((state) => state.user?.user?.name);
  console.log(username);

  const NavItems = [
    {
      title: "Plateforme",
      href: "/",
      expand: true,
      children: [
        {
          title: "Jurix-Chat",
          href: "/ChatBot",
        },

        {
          title: "Jurix-Planner",
          href: "/Planner",
        },
      ],
    },

    // 2
    {
      title: "Pour qui ?",
      href: "/",
      expand: true,
      children: [
        {
          title: "Cabinets d'avocats",
          href: "/Avocats",
        },

        {
          title: "Direction d'entreprise",
          href: "/entreprise",
        },
        {
          title: "Etudiants en droit",
          href: "/Etudiants",
        },
      ],
    },

    // 3
    {
      title: "Contact",
      href: "/Contact",
      expand: false,
    },

    // 4
    {
      title: "Fonctionnalités",
      href: "/Fonctionnalités",
      expand: false,
    },

    // 5
    {
      title: "Avis",
      href: "/Avis",
      expand: false,
    },
    !isauth && {
      title: "Login",
      href: "/LogIn",
      expand: false,
    },
    !isauth && {
      title: "SignIn",
      href: "/SignIn",
      expand: false,
      button: true,
    },
    isauth && {
      title: "Dashboard",
      href: "/Dashbord",
    },
  ];

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
            if (item?.expand) {
              return (
                <div className={classes.alpha} key={i}>
                  <HoverCardDemo
                    title={item?.title}
                    navchild={item?.children}
                  />
                  <ChevronDown />
                </div>
              );
            } else {
              // Gestion des éléments normaux et du bouton
              return item?.button ? (
                // Si l'élément est un bouton
                <button
                  className={classes.button}
                  onClick={() => Navigate(item?.href)}
                >
                  {item?.title}
                </button>
              ) : (
                // Si l'élément est un lien
                <Link to={item?.href} className="nav-link">
                  {item?.title}
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

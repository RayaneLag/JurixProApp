export const NavItems = [
  {
    title: "Plateforme",
    href: "/",
    expand: true,
    children: [
      {
        title: "Jurix-Chat",
        href: "/Chatweb",
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
    title: "User",
  },
];

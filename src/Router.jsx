import "./App.css";
import Home from "./pages/Home";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Error404 from "./pages/error 404";
import Nav from "./components/navbar";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/Login";
import Avis from "./pages/AVIS";
import ContactPage from "./pages/Contacts";
import Dashboard from "./pages/Dashbord";
import Sidebar from "./components/SideBar";
import ChatWeb from "./pages/Chatweb";

import PlannerPage from "./pages/Calander";
import CabinetAvocat from "./pages/AVOCATS";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="avis" element={<Avis />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="Avocats" element={<CabinetAvocat />} />
        </Route>
        <Route path="/" element={<Sidebar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chatweb" element={<ChatWeb />} />
          <Route path="planner" element={<PlannerPage />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default Router;

import "./App.css";
import Home from "./pages/Home";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Error404 from "./pages/error 404";
import Nav from "./components/navbar";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/Login";
import Avis from "./pages/AVIS";
import ContactPage from "./pages/Contacts";
import Dashbord from "./pages/Dashbord";
import Sidebar from "./components/SideBar";
import ChatWeb from "./pages/Chatweb";
import PlannerPage from "./pages/Calander";
import CabinetAvocat from "./pages/AVOCATS";
import SettingsPage from "./pages/Settings";
import ProPage from "./pages/ProPage";
import StudPage from "./pages/StudPage";
import FonctionnalitePage from "./pages/Fonctionnalités";
import Stats from "./pages/stats";
import Contracts from "./pages/contracts";
import Clients from "./pages/clients";

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
          <Route path="ProPage" element={<ProPage />} />
          <Route path="StudPage" element={<StudPage />} />
          <Route path="FonctionnalitePage" element={<FonctionnalitePage />} />
        </Route>
        <Route path="/" element={<Sidebar />}>
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="chatweb" element={<ChatWeb />} />
          <Route path="planner" element={<PlannerPage />} />
          <Route path="Settings" element={<SettingsPage />} />
          <Route path="Stats" element={<Stats />} />
          <Route path="Contracts" element={<Contracts />} />
          <Route path="Clients" element={<Clients />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default Router;

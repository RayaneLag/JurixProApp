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
import Wrapper from "./pages/Calander";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        {/* <Route path="/" element={<Sidebar />}>
          <Route path="/dashbord" element={<Dashboard />} />
          <Route path="/Chatweb" element={<ChatWeb />} />
          <Route path="/Wrapper" element={<Wrapper />} />
        </Route> */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </>
  );
}

export default Router;

import "./App.css";
import Home from "./pages/Home";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Error404 from "./pages/error 404";
import Nav from "./components/navbar";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/Login";

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default Router;

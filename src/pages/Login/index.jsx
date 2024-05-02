import React, { useState } from "react";
import "./Log.module.css";
import { Link } from "react-router-dom";
import classes from "./Log.module.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className={classes.loginPageContainer}>
      <div className={classes.formContainer}>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={classes.loginButton}>
            Se connecter
          </button>
        </form>
      </div>
      <div className={classes.imageContainer}>
        <img
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/335652140/original/5a9bc06b738c3ae3da274d3d72d943b1e793301a/draft-legal-contracts-and-agreements.jpg"
          alt="A relevant description"
        />{" "}
      </div>
    </div>
  );
};

export default LogIn;

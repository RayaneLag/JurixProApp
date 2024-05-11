import React, { useState } from "react";
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
      <div className={classes.imageContainer}>
        <img
          src="https://source.unsplash.com/random/1024x768?office"
          alt="Stylish office"
        />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <h2 className={classes.title}>Connexion</h2>
          <form className={classes.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className={classes.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className={classes.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className={classes.loginButton}>
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

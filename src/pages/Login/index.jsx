import React, { useState } from "react";
import classes from "./Log.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../app/Slices/apislice";
import { login } from "../../app/Slices/UserSlice";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mutate, { isLoading, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const response = await mutate({ password, email });
    console.log(response);
    dispatch(login(response.data.user));
    if (!isError) {
      navigate("/dashbord");
    }
  };

  return (
    <div className={classes.loginPageContainer}>
      <div className={classes.imageContainer}>
        <img
          src="https://i.pinimg.com/564x/22/83/6f/22836f61faee0ff0d5c9046b117448e8.jpg"
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

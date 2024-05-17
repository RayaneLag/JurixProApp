import React from "react";
import { useState } from "react";
import classes from "./Sign.module.css";
import { useSignInMutation } from "../../app/Slices/apislice";
import * as Tabs from "@radix-ui/react-tabs";
import { TextGenerateEffect } from "../../components/TextGen";
import { useDispatch } from "react-redux";
import { login } from "../../app/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    age: "",
    email: "",
    name: "",
    password: "",
    job: "",
  });
  const [emailError, setEmailError] = useState("");
  const [mutate, { isLoading, isError, error }] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setEmailError('Adresse e-mail invalide. Un "@" est requis.');
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await mutate({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        job: formData.job,
        age: parseInt(formData.age),
      }).unwrap();

      console.log(response);
      dispatch(login(response.newUser)); // Adjust based on actual response structure

      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to sign in:", err);
    }
  };

  return (
    <div className={classes.homeSection}>
      <div className={classes.TextGen}>
        <img
          src="/logo_jurixPro-removebg-preview.png"
          alt="Logo"
          className={classes.logo}
        />
        <TextGenerateEffect />
      </div>
      <div className={classes.illustration}>
        <Tabs.Root className={classes.TabsRoot} defaultValue="tab1">
          <Tabs.List
            className={classes.TabsList}
            aria-label="Manage your account"
          >
            <Tabs.Trigger className={classes.TabsTrigger} value="tab1">
              Professional
            </Tabs.Trigger>
            <Tabs.Trigger className={classes.TabsTrigger} value="tab2">
              Guest
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className={classes.TabsContent} value="tab1">
            <p className={classes.Text}>
              Make changes to your account here. Click save when you're done.
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="name">
                  Name
                </label>
                <input
                  className={classes.Input}
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="email">
                  Email
                </label>
                <input
                  className={classes.Input}
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                />
                {emailError && <p className={classes.Error}>{emailError}</p>}
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="password">
                  Password
                </label>
                <input
                  className={classes.Input}
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="age">
                  Age
                </label>
                <input
                  className={classes.Input}
                  id="age"
                  type="number"
                  name="age"
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="job">
                  Job
                </label>
                <input
                  className={classes.Input}
                  id="job"
                  type="text"
                  name="job"
                  onChange={handleInputChange}
                />
              </fieldset>
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "flex-end",
                }}
              >
                <button
                  className={`${classes.Button} ${classes.green}`}
                  type="submit"
                  disabled={isLoading}
                >
                  Save changes
                </button>
              </div>
              {isError && (
                <p className={classes.Error}>
                  Failed to sign in: {error.message}
                </p>
              )}
            </form>
          </Tabs.Content>
          <Tabs.Content className={classes.TabsContent} value="tab2">
            <p className={classes.Text}>
              Change your password here. After saving, you'll be logged out.
            </p>
            <form>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="name">
                  Name
                </label>
                <input className={classes.Input} id="name" />
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="username">
                  Email
                </label>
                <input className={classes.Input} id="username" type="email" />
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="password">
                  Password
                </label>
                <input
                  className={classes.Input}
                  id="password"
                  type="password"
                />
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="age">
                  Age
                </label>
                <input className={classes.Input} id="age" type="number" />
              </fieldset>
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "flex-end",
                }}
              >
                <button
                  className={`${classes.Button} ${classes.green}`}
                  type="submit"
                >
                  Change password
                </button>
              </div>
            </form>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default SignIn;

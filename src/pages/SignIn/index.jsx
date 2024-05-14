import React from "react";
import "./Sign.module.css";
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
  const [mutate, { isLoading, isError }] = useSignInMutation();
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
    } else {
      setEmailError("");
    }
    const response = await mutate({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      Job: formData.job,
      age: parseInt(formData.age),
    });
    console.log(response);
    dispatch(login(response.data.newUser));
    if (!isError) {
      navigate("/dashbord");
    }
  };

  return (
    <>
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
              TabsList
              aria-label="Manage your account"
            >
              <Tabs.Trigger className={classes.TabsTrigger} value="tab1">
                Professional
              </Tabs.Trigger>
              <Tabs.Trigger className={classes.TabsTrigger} value="tab2">
                guest
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className={classes.TabsContent}
              TabsContent
              value="tab1"
            >
              <p className={classes.Text}>
                Make changes to your account here. Click save when you're done.
              </p>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="name">
                  Name
                </label>
                <input
                  className={classes.Input}
                  id="name"
                  name="name"
                  onChange={(e) => handleInputChange(e)}
                />
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="username">
                  Email
                </label>
                <input
                  className={classes.Input}
                  id="email"
                  name="email"
                  onChange={(e) => handleInputChange(e)}
                />
              </fieldset>
              <fieldset className={classes.Fieldset}>
                <label className={classes.Label} htmlFor="password">
                  Password
                </label>
                <input
                  className={classes.Input}
                  id="password"
                  name="password"
                  onChange={(e) => handleInputChange(e)}
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
                  onChange={(e) => handleInputChange(e)}
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
                  onChange={(e) => handleInputChange(e)}
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
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
              </div>
            </Tabs.Content>
            <Tabs.Content className={classes.TabsContent} value="tab2">
              <p className="Text">
                Change your password here. After saving, you'll be logged out.
              </p>
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
                <button className={`${classes.Button} ${classes.green}`}>
                  Change password
                </button>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </>
  );
};

export default SignIn;

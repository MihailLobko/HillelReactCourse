import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import PrimaryUserDataComponent from "./PrimaryUserDataComponent";
import SecondaryUserDataComponent from "./SecondaryUserDataComponent";

const LoginFormComponent = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [submitActive, setSubmitActive] = useState(false);

  useEffect(() => {
    const submitActive =
      userData.firstName &&
      userData.lastName &&
      userData.email &&
      userData.password;
    setSubmitActive(submitActive);
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Data");
  };

  const handleChange = (data) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [data.name]: data.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <PrimaryUserDataComponent
        onChange={handleChange}
      />
      <SecondaryUserDataComponent
        onChange={handleChange}
      />
      <Button disabled={!submitActive} variant="submit" type="submit">
        Save User Data
      </Button>
    </form>
  );
};

export default LoginFormComponent;

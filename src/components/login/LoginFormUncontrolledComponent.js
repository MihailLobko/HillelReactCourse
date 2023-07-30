import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  isPasswordValid,
  isEmailValid,
  isPrimaryUserDataValid,
} from "./LoginFormValidator";

const LoginFormUncontrolledComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const [submitActive, setSubmitActive] = useState(false);
  const [dataValid, setDataValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Data");
  };

  const handleChange = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    console.log(firstName);

    const passwordValid = isPasswordValid(password);
    const emailValid = isEmailValid(email);
    const firstNameValid = isPrimaryUserDataValid(firstName);
    const lastNameValid = isPrimaryUserDataValid(lastName);

    setDataValid((prevData) => ({
      ...prevData,
      firstName: firstNameValid,
      lastName: lastNameValid,
      email: emailValid,
      password: passwordValid
    }));
    setSubmitActive(
      passwordValid && emailValid && firstNameValid && lastNameValid
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        error={!dataValid.firstName}
        id="outlined-required"
        label="First Name"
        onChange={handleChange}
        name="firstName"
        helperText={
          dataValid.firstName
            ? null
            : "Shoud be longer then 2 characters and not include numbers"
        }
        inputRef={firstNameRef}
      />
      <TextField
        error={!dataValid.lastName}
        id="outlined-required"
        label="Last Name"
        onChange={handleChange}
        name="lastName"
        helperText={
          dataValid.lastName
            ? null
            : "Shoud be longer then 2 characters and not include numbers"
        }
        inputRef={lastNameRef}
      />
      <TextField
        error={!dataValid.email}
        id="outlined-required"
        label="Email"
        onChange={handleChange}
        name="email"
        helperText={dataValid.email ? null : "Invalid email format"}
        inputRef={emailRef}
      />
      <TextField
        error={!dataValid.password}
        id="outlined-required"
        label="Password"
        onChange={handleChange}
        name="password"
        helperText={
          dataValid.password
            ? null
            : "Password - minimum 1 capital letter, 1 number, maximum 10, minimum 6 characters"
        }
        inputRef={passwordRef}
      />
      <Button disabled={!submitActive}   variant="submit" type="submit">
        Save User Data
      </Button>
    </form>
  );
};

export default LoginFormUncontrolledComponent;

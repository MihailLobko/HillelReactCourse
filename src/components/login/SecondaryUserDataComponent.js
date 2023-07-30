import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { isPasswordValid, isEmailValid } from "./LoginFormValidator";

const SecondaryUserDataComponent = ({onChange }) => {
  const [dataValid, setDataValid] = useState({
    email: false,
    password: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      const valid = isEmailValid(value);
      initData(valid);
    } else if (name === "password") {
      const valid = isPasswordValid(value);
      initData(valid);
    }

    function initData(valid) {
      setDataValid((prevData) => ({
        ...prevData,
        [name]: valid,
      }));
      if (valid) {
        onChange({ name: name, value: value });
      } else {
        onChange({ name: name, value: "" });
      }
    }
  };

  return (
    <div className="secondaryUserData">
      <TextField
        error={!dataValid.email}
        id="outlined-required"
        label="Email"
        onChange={handleChange}
        name="email"
        helperText={dataValid.email ? null : "Invalid email format"}
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
      />
    </div>
  );
};

export default SecondaryUserDataComponent;

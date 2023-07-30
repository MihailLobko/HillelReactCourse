import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { isPrimaryUserDataValid } from "./LoginFormValidator";

const PrimaryUserDataComponent = ({onChange }) => {
  const [dataValid, setDataValid] = useState({
    firstName: false,
    lastName: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const valid = isPrimaryUserDataValid(value);
    setDataValid((prevData) => ({
      ...prevData,
      [name]: valid,
    }));
    if (valid) {
      onChange({ name: name, value: value });
    } else {
      onChange({ name: name, value: "" });
    }
  };

 
  return (
    <div className="primaryUserData">
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
      />
    </div>
  );
};

export default PrimaryUserDataComponent;

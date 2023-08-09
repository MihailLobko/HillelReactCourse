import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { fetchUserData } from "../api/Api";

const UserCard = ({ onSubmit, userData }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const loadUserData = (username) => {
    setLoading(true);
    fetchUserData(username)
      .then((user) => onSubmit(user))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="column">
      {!userData ? (
        <>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="button" onClick={() => loadUserData(username)}>
            Submit
          </button>
        </>
      ) : null}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        userData && <img src={userData.avatar_url} alt={`${username} Avatar`} />
      )}
    </div>
  );
};

export default UserCard;

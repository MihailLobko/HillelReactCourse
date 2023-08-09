import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUserRepos } from "../api/Api";
import { Box, CircularProgress } from "@mui/material";
import ResultUserCard from "./ResultUserCard";

const Result = () => {
  const location = useLocation();
  const [firstUserData, setFirstUserData] = useState(
    location.state.firstUserData
  );
  const [secondUserData, setSecondUserData] = useState(
    location.state.secondUserData
  );
  const [loading, setLoading] = useState({ first: true, second: true });

  useEffect(() => {
    getUserRepos(firstUserData.login)
      .then((repos) =>
        setFirstUserData((prevState) => ({
          ...prevState,
          totalScore:
            repos.reduce((sum, repo) => sum + repo.stargazers_count, 0) +
            firstUserData.followers,
        }))
      )
      .finally(() => {
        setLoading((prevState) => ({ ...prevState, first: false }));
      });
    getUserRepos(secondUserData.login)
      .then((repos) =>
        setSecondUserData((prevState) => ({
          ...prevState,
          totalScore:
            repos.reduce((sum, repo) => sum + repo.stargazers_count, 0) +
            secondUserData.followers,
        }))
      )
      .finally(() => {
        setLoading((prevState) => ({ ...prevState, second: false }));
      });
  }, []);

  return (
    <div>
      {loading.first && loading.second ? (
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
        <div className="row">
          <div className="user-container">
            <ResultUserCard
              userData={firstUserData}
              winner={firstUserData.totalScore > secondUserData.totalScore}
              score={firstUserData.totalScore}
            />
          </div>
          <div className="user-container">
            <ResultUserCard
              userData={secondUserData}
              winner={secondUserData.totalScore > firstUserData.totalScore}
              score={secondUserData.totalScore}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;

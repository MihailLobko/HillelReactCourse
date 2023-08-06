import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { fetchPopularRepos } from "../api/Api";

const Repos = ({ selectedLanguage, onLoading }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    onLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((repos) => setRepos(repos))
      .catch((error) => setError(error))
      .finally(() => {
        onLoading(false);
        setLoading(false);
      });
  }, [selectedLanguage]);

  if (loading) {
    return (
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
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className="popular-list">
      {repos &&
        repos.map((repo, index) => {
          return (
            <li key={repo.id} className="popular-item">
              <div className="popular-rank">#{index + 1}</div>
              <ul className="space-list-items">
                <li>
                  <img
                    className="avatar"
                    src={repo.owner.avatar_url}
                    alt="Avatar"
                  />
                </li>
                <li>
                  <a href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
                </li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          );
        })}
    </ul>
  );
};

export default Repos;

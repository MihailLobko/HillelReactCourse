import axios from "axios";

const handleError = (error) => console.error(error);

export const fetchPopularRepos = (language) => {
  const encodeURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  return axios
    .get(encodeURI)
    .then((response) => response.data.items)
    .catch(handleError);
};

export const fetchUserData = (username) => {
  const encodeURI = window.encodeURI(
    `https://api.github.com/users/${username}`
  );
  return axios
    .get(encodeURI)
    .then((response) => response.data)
    .catch(handleError);
};

export const getUserRepos = (username) => {
  const encodeURI = window.encodeURI(
    `https://api.github.com/users/${username}/repos`
  );
  return axios
    .get(encodeURI)
    .then((response) => response.data)
    .catch(handleError);
};

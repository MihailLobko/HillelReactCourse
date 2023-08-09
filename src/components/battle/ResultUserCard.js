const ResultUserCard = ({ userData, winner, score }) => {
  return (
    <div className="user-info">
      <div className="winner-label">{winner ? "Winner" : "Loser"}</div>
      <div className="score-label">{"Score=" + score}</div>
      <img src={userData.avatar_url} alt={`${userData.name} Avatar`} />
      <div>
        <h2>{userData.login}</h2>
        <p>Location: {userData.location}</p>
        <p>Company: {userData.company}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Public Repos: {userData.public_repos}</p>
        {userData.blog && (
          <p>
            Blog:{" "}
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">
              {userData.blog}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ResultUserCard;

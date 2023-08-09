import React, { useState } from "react";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const Battle = () => {
  const [firstUserData, setFirstUserData] = useState(null);
  const [secondUserData, setSecondUserData] = useState(null);
  const navigate = useNavigate();

  const handleUser1Submit = (userData) => {
    setFirstUserData(userData);
  };

  const handleUser2Submit = (userData) => {
    setSecondUserData(userData);
  };

  const handleReset = () => {
    setFirstUserData(null);
    setSecondUserData(null);
  };

  const handleBattle = () => {
    navigate("/battle/result", {
      state: {
        firstUserData: firstUserData,
        secondUserData: secondUserData,
      },
    });
  };

  return (
    <>
      <div className="row">
        <UserCard onSubmit={handleUser1Submit} userData={firstUserData} />
        <UserCard onSubmit={handleUser2Submit} userData={secondUserData} />
      </div>
      {firstUserData && secondUserData && (
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      )}
      {firstUserData && secondUserData && (
        <button className="button" onClick={handleBattle}>
          Battle
        </button>
      )}
    </>
  );
};

export default Battle;

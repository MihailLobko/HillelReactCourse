import "../src/App.css";
import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import BlogComponent from "./components/BlogComponent";
import LoginFormComponent from "./components/login/LoginFormComponent";
import LoginFormUncontrolledComponent from "./components/login/LoginFormUncontrolledComponent";
const App = () => {
  const [dataLoad, setDataLoad] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
        setDataLoad(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleCreateNewRow = (post) => {
    setTableData((prevData) => [...prevData, post]);
  };

  const handleSaveRowEdits = (post) => {
    setTableData((prevData) =>
      prevData.map((data) => (data.id !== post.id ? data : post))
    );
  };

  const handleDeleteRow = (post) => {
    setTableData((prevData) => prevData.filter((data) => data.id !== post.id));
  };

  return (
    <div className="App">
      {dataLoad ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <LoginFormUncontrolledComponent />
          <BlogComponent
            posts={tableData}
            onDelete={handleDeleteRow}
            onEdit={handleSaveRowEdits}
            onCreate={handleCreateNewRow}
          />
        </>
      )}
    </div>
  );
};

export default App;

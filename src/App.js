import "../src/App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
import Battle from "./components/battle/Battle";
import Layout from "./components/layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "popular",
          element: <Popular />,
        },
        {
          path: "battle",
          element: <Battle />,
        },
        {
          path: "*",
          element: <h2>Error</h2>,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;

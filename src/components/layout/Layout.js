import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const Layout = () => (
  <main className="container">
    <Navigation />
    <Outlet />
  </main>
);

export default Layout;

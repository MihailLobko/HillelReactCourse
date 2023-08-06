import {NavLink} from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle"];

const Navigation = () => {
  return (
    <nav>
      <ul className="nav">
        {navLinks.map((navLink, index) => (
          <>
            <li key={index}>
              <NavLink to={navLink === "Home" ? "/" : navLink.toLowerCase()}>
                {navLink}
              </NavLink>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

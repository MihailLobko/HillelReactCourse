import { Link } from "react-router-dom";

const Home = () => (
  <main className="home-container">
    <h1>Github battle: battle your friends and ... stuff</h1>
    <Link to="battle" className="button">
      Battle
    </Link>
  </main>
);

export default Home;

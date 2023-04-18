import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="Home">
      <h2>Welcome!</h2>
      <h3>Pick a category</h3>
      <h4>or</h4>
      <Link to="/reviews">View Reviews</Link>
    </div>
  );
};

import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `reviews`;
    navigate(path);
  };

  return (
    <div className="Home">
      <h2>Welcome!</h2>
      <h3>Pick a category</h3>
      <h4>or</h4>
      <button className="reviewListButton" onClick={routeChange}>
        View reviews here
      </button>
    </div>
  );
};

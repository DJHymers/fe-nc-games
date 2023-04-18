import axios from "axios";

const ncGamesAPI = axios.create({
  baseURL: `https://nc-game-project.onrender.com/api`,
});

export const fetchReviews = async () => {
  const res = await ncGamesAPI.get(`/reviews`);
  console.log(res);
  return res.data.reviews;
};

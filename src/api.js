import axios from "axios";

const ncGamesAPI = axios.create({
  baseURL: `https://nc-game-project.onrender.com/api`,
});

export const fetchReviews = async () => {
  const res = await ncGamesAPI.get(`/reviews`);
  return res.data.reviews;
};

export const fetchReviewById = async (review_id) => {
  const res = await ncGamesAPI.get(`/reviews/${review_id}`);
  return res.data.reviews;
};

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

export const fetchComments = async (review_id) => {
  const res = await ncGamesAPI.get(`/reviews/${review_id}/comments`);
  return res.data.comments;
};

export const patchUpVotes = async (review_id) => {
  const res = await ncGamesAPI.patch(`/reviews/${review_id}`, {
    inc_votes: 1,
  });
  return res.data.reviews;
};

export const patchDownVotes = async (review_id) => {
  const res = await ncGamesAPI.patch(`/reviews/${review_id}`, {
    inc_votes: -1,
  });
  return res.data.reviews;
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";

export const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return (
      <div className="reviewLoading">
        <p>Review Loading...</p>
      </div>
    );
  }

  return (
    <main className="singleReview">
      <h2 id="singleTitle">{review.title}</h2>
      <h3 id="singleDesigner">Created By: {review.designer}</h3>
      <img
        id="singleReviewImg"
        src={review.review_img_url}
        alt={review.title}
      />
      <h4 id="singleCategory">Category: {review.category}</h4>
      <p id="singleReviewBody">{review.review_body}</p>
      <h4 id="singleOwner">Review By: {review.owner}</h4>
      <h5 id="singleVotes">Votes: {review.votes}</h5>
      <h5 id="singleComments">Comments: {review.comment_count}</h5>
      <h5 id="singleCreatedAt">Posted: {review.created_at}</h5>
    </main>
  );
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchComments,
  fetchReviewById,
  patchUpVotes,
  patchDownVotes,
} from "../api";
import { CommentCard } from "./CommentCard";

export const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [localVotes, setLocalVotes] = useState(0);
  const [disableUpButton, setDisableUpButton] = useState(false);
  const [disableDownButton, setDisableDownButton] = useState(false);
  const [error, setError] = useState(false);

  const handleUpVote = (review_id) => {
    setDisableUpButton(true);
    setLocalVotes((localVotes) => localVotes + 1);
    patchUpVotes(review_id).catch(() => {
      setLocalVotes(0);
      setError(true);
    });
  };

  const handleDownVote = (review_id) => {
    setDisableDownButton(true);
    setLocalVotes((localVotes) => localVotes - 1);
    patchDownVotes(review_id).catch(() => {
      setLocalVotes(0);
      setError(true);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(review_id).then((comments) => {
      setComments(comments);
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
      <h4 id="singleVotes">
        <button
          id="reviewDownVote"
          disabled={disableDownButton}
          onClick={() => {
            handleDownVote(review.review_id);
          }}
        >
          Down
        </button>
        Votes: {review.votes + localVotes}{" "}
        <button
          id="reviewUpVote"
          disabled={disableUpButton}
          onClick={() => {
            handleUpVote(review.review_id);
          }}
        >
          Up
        </button>
        {error ? (
          <p>Oops! Your vote was not counted, try again later.</p>
        ) : null}
      </h4>
      <h2 id="allComments">Comments: {review.comment_count} </h2>
      {comments !== "User has not made any comments" ? (
        comments.map((comment) => {
          return <CommentCard key={comment.review_id} {...comment} />;
        })
      ) : (
        <h2>No Comments Yet...</h2>
      )}
    </main>
  );
};

import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import { fetchReviews } from "../api";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="ReviewList">
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </ul>
    </div>
  );
}

export default function ReviewCard({
  review_id,
  title,
  category,
  designer,
  owner,
  review_body,
  review_img_url,
  created_at,
  votes,
  comment_count,
}) {
  return (
    <div className="ReviewCard">
      <li id="title">
        <h2>{title}</h2>
      </li>
      <li id="category">
        <h3>Category: {category}</h3>
      </li>
      <li id="review_img_url">
        <img src={review_img_url} alt={title} />
      </li>
      <li id="votes">
        <h3>Votes: {votes}</h3>
      </li>
      <li id="comment_count">
        <h3>Comments: {comment_count}</h3>
      </li>
      <li id="owner">
        <h3>By: {owner}</h3>
      </li>
    </div>
  );
}
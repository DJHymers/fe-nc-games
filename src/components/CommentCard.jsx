export const CommentCard = ({
  comment_id,
  body,
  review_id,
  author,
  votes,
  created_at,
}) => {
  return (
    <div className="CommentCard">
      <ul id="CommentCardList">
        <li id="CommentAuthor">
          <h2>{author}</h2>
        </li>
        <li id="commentBody">
          <p>Commented: {body}</p>
        </li>
        <li>
          <h3 id="Commentvotes">Votes: {votes}</h3>
          <h3 id="commentCreatedAt">Commented at: {created_at}</h3>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

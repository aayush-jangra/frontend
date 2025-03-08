import { useState } from "react";
import "./nestedCommentsStyles.css";

export const Comment = ({
  comment,
  allComments,
  replyToComment,
  deleteComment,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <div className="comment">
      <div className="comment-author">{comment.author}</div>
      <div>{comment.content}</div>
      <div className="comment-reply-box">
        <button
          className="comment-reply-button"
          onClick={() => setShowInput((prev) => !prev)}
        >
          Reply
        </button>
        {comment.author === "You" && (
          <button
            className="comment-delete-button"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </button>
        )}
      </div>
      {showInput && (
        <div className="comment-reply-input-container">
          <textarea
            style={{ width: 300, height: 100 }}
            value={inputValue}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              replyToComment(comment.id, inputValue);
              setinputValue("");
              setShowInput(false);
            }}
            disabled={!inputValue}
            className="comment-post-button"
          >
            Post
          </button>
        </div>
      )}
      {comment.replies && !!comment.replies.length && (
        <div className="replies">
          {comment.replies.map((id) => (
            <Comment
              key={id}
              comment={allComments[id]}
              allComments={allComments}
              replyToComment={replyToComment}
              deleteComment={deleteComment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

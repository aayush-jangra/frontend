import { useState } from "react";
import { defaultComments } from "../../constants/comments";
import { Comment } from "./NestedComments";
import "./nestedCommentsStyles.css";

export const NestedCommentsPage = () => {
  const [comments, setComments] = useState(defaultComments);

  const rootComments = Object.values(comments).filter(
    (comment) => comment.parentId === null
  );

  const replyToComment = (id, content) => {
    const newComment = {
      id: Date.now(),
      parentId: id,
      replies: [],
      author: "You",
      content,
    };

    setComments((prev) => {
      const copy = { ...prev };

      copy[id].replies.push(newComment.id);

      return { [newComment.id]: { ...newComment }, ...copy };
    });
  };

  const deleteComment = (id) => {
    setComments((prev) => {
      const copy = { ...prev };

      copy[copy[id].parentId].replies = copy[copy[id].parentId].replies.filter(
        (replyId) => replyId !== id
      );

      // Enough till now to delete from UI

      const deleteRecursively = (commentId) => {
        copy[commentId].replies?.forEach((replyId) => {
          deleteRecursively(replyId);
        });

        delete copy[commentId];
      };

      deleteRecursively(id);

      return copy;
    });
  };

  return (
    <div>
      {rootComments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          allComments={comments}
          replyToComment={replyToComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
};

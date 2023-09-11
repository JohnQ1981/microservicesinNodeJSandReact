import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content,
      });
      setContent("");
      setStatus("Comment successfully created!");
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {status && <div className="mt-3">{status}</div>}
    </div>
  );
};

export default CommentCreate;

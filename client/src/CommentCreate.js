import React, { useState } from "react";
import axios from "axios";
import './App.css'

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);  // Hide the message after 3 seconds
  };

  return (
    <div>
      {showMessage && <div>
        Comment successfully created 
        <div className="progressBar animate"></div> {/* Progress bar */}
      </div>}
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

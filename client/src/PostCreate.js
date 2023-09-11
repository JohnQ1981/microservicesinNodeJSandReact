import React, { useState } from "react";
import axios from "axios";
import './App.css'

export default () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [animate, setAnimate] = useState(false);


  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4000/posts', {
        title
      });
      setTitle("");
      setStatus("Post successfully created!");
      setAnimate(true);

      // Make the status message and progress bar disappear after 3 seconds
      setTimeout(() => {
        setStatus("");
        setAnimate(false);
      }, 3000);

    } catch (error) {
      setStatus("An error occurred. Please try again.");
      setAnimate(true);

      // Make the error message and progress bar disappear after 3 seconds
      setTimeout(() => {
        setStatus("");
        setAnimate(false);
      }, 3000);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {status && (
        <div className="mt-3">
          {status}
          <div className={`progressBar ${animate ? 'animate' : ''}`}></div>
        </div>
      )}
    </div>
  );
};

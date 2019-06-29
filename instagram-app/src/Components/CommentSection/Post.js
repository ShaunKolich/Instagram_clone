import React from "react";
import "../less/post.css";

const Post = props => {
  return (
    <div className="Post_comment">
      <form onSubmit={props.addComment}>
        <input
          type="text"
          onChange={props.changeHandler}
          name="commented"
          value={props.text}
        />
        <button>...</button>
      </form>
    </div>
  );
};

export default Post;

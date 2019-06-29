import React from "react";
import PropTypes from "prop-types";
import "../less/CommentSection.css";
import Post from "../CommentSection/Post";

function CommentSection(props) {
  return (
    <div>
      {props.comments.map((Comment, index) => {
        // console.log(Comment.id);
        return (
          <div className="info_container" key={Comment.id}>
            <div className="user_container">
              <img src={Comment.thumbnailUrl} />
              <h2> {Comment.username}</h2>
            </div>
            <div className="image_box">
              <img src={Comment.imageUrl} alt="" />
            </div>
            <div className="likes_Container">
              <i className="far fa-heart" />
              <i className="far fa-comment" />
              <h2>{Comment.likes} likes</h2>
            </div>
            {Comment.comments.map(Comments => {
              return (
                <div className="comment_container" key={Comments.id}>
                  <h2>{Comments.username}</h2>
                  <p>{Comments.text}</p>
                </div>
              );
            })}
            <Post
              addComment={e => props.addComment(e, index)}
              text={props.text}
              changeHandler={props.changeHandler}
            />
          </div>
        );
      })}
    </div>
  );
}

Comment.PropTypes = {
  Comment: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;

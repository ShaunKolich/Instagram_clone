import React from "react";
import { Component } from "react";
import "../less/PostContainer.css";
import data from "../../../src/dummy-data";
import CommentSection from "../CommentSection/CommentSection";

class PostSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: data,
      commented: ""
    };
  }
  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  addComment = (e, index) => {
    e.preventDefault();
    const { comments } = this.state;
    const newComment = {
      text: this.state.commented,
      id: Date.now(),
      username: "Shaun Kolich"
    };
    // cloning the state so it doesn't chnge/mutate original
    const updatedComment = [...comments];
    // accessing the comments array using dot notaion and the index of which card
    updatedComment[index].comments.push(newComment);
    this.setState({ comments: updatedComment, commented: "" });
  };

  render() {
    return (
      <div className="content">
        <CommentSection
          comments={this.state.comments}
          text={this.state.commented}
          changeHandler={this.changeHandler}
          addComment={this.addComment}
        />
      </div>
    );
  }
}

export default PostSection;
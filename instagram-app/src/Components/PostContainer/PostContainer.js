import React from 'react';
import { Component } from 'react';
import '../less/PostContainer.css';
import data from '../../../src/dummy-data';
import CommentSection from '../CommentSection/CommentSection';

class PostSection extends Component {
    constructor() {
        super();
        this.state = {
            comments: data,
            commented: ''
        }
        
    };



    changeHandler = (e) => {
        // e.preventDefault();
        this.setState({commented:e.target.value});
      };

    addComment = (e) => {
        e.preventDefault();
        const newComment =  {
          text: this.state.text,
          id: Date.now(),
          username: 'Shaun Kolich'
        }
       
        
        console.log(newComment);
    };

    componentDidMount() {
        this.setState({ comments: newComment });
}   


    render() {
        // console.log(this.state);
        
        return (
            <div className="content">
            <CommentSection comments = {this.state.comments}/>

            
            </div>
        )


    }
    
}




export default PostSection;

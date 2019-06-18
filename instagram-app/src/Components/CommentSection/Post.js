import React from 'react';
import '../less/post.css';


const Post = (props) =>{
    return (
        <div class ='Post_comment'>
            <form onSubmit={props.addComment}>
                <input type="text" onChange={props.changeHandler} name="text" value={props.text} />
                <button>...</button>
            </form>

            
        </div> 
    )
};

export default Post;
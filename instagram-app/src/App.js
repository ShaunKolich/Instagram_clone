import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/SearchBar/SearchBar'
import PostComment from './Components/PostContainer/PostContainer';
import Post from './Components/CommentSection/Post';

function App() {
  return (
    <div className="App">
      <Search />
      <PostComment/>
     


    </div>
  );
}

export default App;

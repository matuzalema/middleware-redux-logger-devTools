import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <div>
    {text} <span>votes: {votes}</span> 
    <button className='button' onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button className='button' onClick={() => thumbDownComment(id)}>Thumb down</button>
  </div>;

export default Comment;


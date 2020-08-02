import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <img className="ui avatar image" alt="avatar" src={props.avatar} />
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timePosted}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};
export default CommentDetail;

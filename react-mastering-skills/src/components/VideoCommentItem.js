import React from 'react';
const VideoCommentItem = ({ comment }) => {
  const date = new Date(Date.parse(comment.publishedAt)).toLocaleString();
  return (
    <div className="comment">
      <div className="content">
        <a className="avatar" href={comment.authorChannelUrl}>
          <img
            className="ui avatar image"
            alt="avatar"
            src={comment.authorProfileImageUrl}
          />
        </a>
        <span className="author">{comment.authorDisplayName}</span>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{comment.textOriginal}</div>
      </div>
    </div>
  );
};

export default VideoCommentItem;

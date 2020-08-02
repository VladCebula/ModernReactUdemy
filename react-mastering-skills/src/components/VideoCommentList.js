import React from 'react';
import VideoCommentItem from './VideoCommentItem';

const VideoCommentList = ({ comments }) => {
  const list = comments.map((comment) => {
    return (
      <VideoCommentItem
        key={comment.snippet.topLevelComment.id}
        comment={comment.snippet.topLevelComment.snippet}
      />
    );
  });
  return (
    <div className="ui celled list">
      <h3 className="ui dividing header">Comments:</h3>
      <div className="comments">{list}</div>
    </div>
  );
};
export default VideoCommentList;

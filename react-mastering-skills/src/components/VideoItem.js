import './VideoItem.css';
import React from 'react';
const VideoItem = ({ description, thumbnail, title, video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui medium image" alt={title} src={thumbnail.url} />
      <div className="content">
        <div className="header">{title}</div>
        {/* <div className="description">{description}</div> */}
      </div>
    </div>
  );
};

export default VideoItem;

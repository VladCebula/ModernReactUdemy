import './VideoItem.css';
import React from 'react';
const VideoItem = ({ thumbnail, title, video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui medium image" alt={title} src={thumbnail.url} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const list = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        title={video.snippet.title}
        description={video.snippet.description}
        thumbnail={video.snippet.thumbnails.medium}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relax divided list">{list}</div>;
};
export default VideoList;

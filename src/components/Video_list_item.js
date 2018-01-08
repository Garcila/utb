import React from 'react';

const VideoListItem = ({ makeSelectedVideo, video }) => {
  return (
    <li className="cards" onClick={() => makeSelectedVideo(video)}>
      <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
      <div className="cards-title">{video.snippet.title}</div>
    </li>
  );
};

export default VideoListItem;

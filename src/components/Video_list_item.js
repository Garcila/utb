import React from 'react';

const VideoListItem = ({ makeSelectedVideo, video }) => {
  return (
    <li className="cards" onClick={() => makeSelectedVideo(video)}>
      <div className="cards-title">{video.snippet.title}</div>
      <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
    </li>
  );
};

export default VideoListItem;

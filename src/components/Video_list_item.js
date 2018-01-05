import React from 'react';

const VideoListItem = ({ title, thumbnail, selected, video }) => {
  return (
    <li onClick={() => selected(video)} >
      <div>{title}</div>
      <img src={thumbnail.url} alt={title} />
    </li>
  );
};

export default VideoListItem;

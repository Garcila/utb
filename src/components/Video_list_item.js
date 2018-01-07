import React from 'react';

const VideoListItem = ({ title, thumbnail, select, video}) => {
    return (
      <li className="cards" onClick={() => select(video)}>
        <div className="cards-title">{title}</div>
        <img src={thumbnail.url} alt={title} />
      </li>
    );
};

export default VideoListItem;

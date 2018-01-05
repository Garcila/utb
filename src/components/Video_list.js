import React from 'react';

import VideoListItem from './Video_list_item';

const VideoList = ({ videos, selected }) => {
  const list = videos.map(v => (
    <VideoListItem
      selected={selected}
      title={v.snippet.title}
      key={v.id.videoId}
      video={v}
      thumbnail={v.snippet.thumbnails.default}
    />
  ));
  return (
    <div>
      Video List
      <ul>{list}</ul>
    </div>
  );
};

export default VideoList;

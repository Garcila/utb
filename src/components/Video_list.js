import React, { Fragment } from 'react';

import VideoListItem from './Video_list_item';

const VideoList = ({ videos, select, selectedVideo }) => {
  const otherVideos = videos.filter(vd => vd.id.videoId !== selectedVideo.id.videoId);
  const list = otherVideos.map(v => (
    <VideoListItem
      select={select}
      title={v.snippet.title}
      key={v.id.videoId}
      id={v.id.videoId}
      video={v}
      thumbnail={v.snippet.thumbnails.high}
      selectedVideo={selectedVideo}
    />
  ));
  return (
    <Fragment>
      <ul>{list}</ul>
    </Fragment>
  );
};

export default VideoList;

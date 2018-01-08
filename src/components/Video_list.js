import React from 'react';

import VideoListItem from './Video_list_item';

const VideoList = ({ videos, makeSelectedVideo, selectedVideo }) => {
  const otherVideos = videos.filter(
    vd => vd.id.videoId !== selectedVideo.id.videoId
  );
  const list = otherVideos.map(v => (
    <VideoListItem
      makeSelectedVideo={makeSelectedVideo}
      key={v.id.videoId}
      selectedVideo={selectedVideo}
      video={v}
    />
  ));
  return <ul className="video-list">{list}</ul>;
};

export default VideoList;

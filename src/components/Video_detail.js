import React from 'react';

const VideoDetail = ({ video }) => {
  if (video) {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="video-detail">
        <div className="iframe-container intrinsic-container intrinsic-container-16x9">
          <iframe
            className="video-player"
            title={url}
            src={url}
            allowFullScreen
          />
        </div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    );
  }
  return <div className="loading">Loading...</div>;
};

export default VideoDetail;

import React, { Fragment } from 'react';

const VideoDetail = ({video, ...props}) => {
  const url = 'https://www.youtube.com/embed/';
  return (
    <Fragment>
      {video ? (
        <div className="video-detail">
          <div className="iframe-container intrinsic-container intrinsic-container-16x9">
            <iframe
              className="video-player"
              title={`${url}${video.id.videoId}`}
              src={`${url}${video.id.videoId}`}
              allowFullScreen
            />
          </div>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </Fragment>
  );
};

export default VideoDetail;

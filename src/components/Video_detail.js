import React from 'react';

const VideoDetail = ({ video }) => {
  return (
    <div>
      {video ? (
        <div className="video-detail">
          <div className="iframe-container intrinsic-container intrinsic-container-16x9">
            <iframe
              className="video-player"
              title={`https://www.youtube.com/embed/${video.id.videoId}`}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allowFullScreen
            />
          </div>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default VideoDetail;

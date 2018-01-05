import React from 'react';

const VideoDetail = ({ video }) => {
  console.log(video);
  if(video) {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <div>
        <iframe title={url} src={url} ></iframe>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>      
      </div>
    );
  } else {
    return (
      <div>Loading...</div>
    )
  }

};

export default VideoDetail;

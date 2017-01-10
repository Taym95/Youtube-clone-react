import React from 'react'


const VideoDetail = (props) =>{
  const video = props.video;

  if (!video){
    return <div> Loding....</div>;
  }

  const VideoId = video.id.videoId;
  const Url = 'https://www.youtube.com/embed/'+VideoId;

  return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={Url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
  );
};

export default VideoDetail;
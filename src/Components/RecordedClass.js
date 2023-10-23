import React from "react";
const recordedVideoData = [
  {
    title: "Video 1",
    url: "https://www.youtube.com/embed/VIDEO_ID_1"
  },
  {
    title: "Video 2",
    url: "https://www.youtube.com/embed/VIDEO_ID_2"
  }
];

const RecordedClass = () => {
  return (
    <div className="recorded-videos">
      <h2>Recorded Study Videos</h2>
      {recordedVideoData.map((video, index) => (
        <div key={index} className="video-link">
          <h3>{video.title}</h3>
          <iframe
            title={video.title}
            width="560"
            height="315"
            src={video.url}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default RecordedClass;

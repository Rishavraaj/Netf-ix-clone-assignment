import React from "react";
import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

const VideoPopup = ({ videoId, setVideoId, setShow }) => {
  const hidePopup = () => {
    setVideoId(null);
    setShow(false);
  };
  return (
    <VideoPopupWrapper>
      <VideoPlayer>
        <span onClick={hidePopup}>close</span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={true}
        />
      </VideoPlayer>
    </VideoPopupWrapper>
  );
};

export default VideoPopup;

const VideoPopupWrapper = styled.div`
  width: 700px;
  height: 400px;
  @media (max-width: 768px) {
    width: 400px;
    height: 300px;
  }
`;

const VideoPlayer = styled.div`
  width: 100%;
  height: 100%;
`;

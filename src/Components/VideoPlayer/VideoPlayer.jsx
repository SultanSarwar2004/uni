import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = () => {
    if (player.current === null) return;
    player.current.classList.add("hide");
    setPlayState(false);
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;

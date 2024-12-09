import { useState } from "react";

function Video() {
  const [videoLink, setVideoLink] = useState("https://05ec48578e12534030.temporary.link/kaur/video-loop-1.mp4")
  const [isLooping, setIsLooping] = useState(false);

  function handleVideoLoop() {
    if (!isLooping) {
      setVideoLink("https://05ec48578e12534030.temporary.link/kaur/video-loop-2.mp4");
      setIsLooping(true)
    }
  }

  return (
    <>
      <div className="video-container">
        <img className="overlay" src="https://05ec48578e12534030.temporary.link/kaur/scanlines.png" alt="CRT Overlay" />
        <video className="video-background" autoPlay muted playsInline loop={isLooping} preload="auto" src={videoLink} type="video/mp4" onEnded={handleVideoLoop}>
        </video>
      </div>
    </>
  );
}

export default Video;
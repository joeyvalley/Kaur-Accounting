import { useState } from "react";

function Video() {
  const [videoLink, setVideoLink] = useState("https://res.cloudinary.com/dc12ewdqw/video/upload/v1708556053/kaur/whpysaqerwdqo7a6ydm1.mp4")
  const [isLooping, setIsLooping] = useState(false);

  function handleVideoLoop() {
    if (!isLooping) {
      setVideoLink("https://res.cloudinary.com/dc12ewdqw/video/upload/v1708556057/kaur/c4rasjfed9zlc3zgxhlh.mp4");
      setIsLooping(true)
    }
  }

  return (
    <>
      <div className="video-container">
        <img className="overlay" src="https://res.cloudinary.com/dc12ewdqw/image/upload/v1708556379/scanlines_eoppwp.png" alt="CRT Overlay" />
        <video className="video-background" autoPlay muted playsInline loop={isLooping} preload="auto" src={videoLink} type="video/mp4" onEnded={handleVideoLoop}>
        </video>
      </div>
    </>
  );
}

export default Video;
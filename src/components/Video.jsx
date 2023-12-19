import { useState } from "react";

function Video() {
  const [videoLink, setVideoLink] = useState("https://res.cloudinary.com/dd5bgygfp/video/upload/v1703007891/kaur/video-loop-1_yo6vbs.mp4")
  const [isLooping, setIsLooping] = useState(false);

  function handleVideoLoop() {
    if (!isLooping) {
      setVideoLink("https://res.cloudinary.com/dd5bgygfp/video/upload/v1703007894/kaur/video-loop-2_eao3nd.mp4");
      setIsLooping(true)
    }
  }

  return (
    <>
      <div className="video-container">
        <img className="overlay" src="https://res.cloudinary.com/dd5bgygfp/image/upload/v1703007780/kaur/scanlines_copy_omuxa0.png" alt="CRT Overlay" />
        <video className="video-background" autoPlay muted playsInline loop={isLooping} preload="auto" src={videoLink} type="video/mp4" onEnded={handleVideoLoop}>
        </video>
      </div>
    </>
  );
}

export default Video;
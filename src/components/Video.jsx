import { useState } from "react";

function Video() {
  const [videoLink, setVideoLink] = useState("https://res.cloudinary.com/dnld1cqvy/video/upload/v1700503862/Kaur%20Accounting/video-loop-1_ibswlq.mp4")
  const [isLooping, setIsLooping] = useState(false);

  function handleVideoLoop() {
    if (!isLooping) {
      setVideoLink("https://res.cloudinary.com/dnld1cqvy/video/upload/v1700258212/Kaur%20Accounting/video-loop-2_huxidw.mp4");
      setIsLooping(true)
    }
  }

  return (
    <>
      <div className="video-container">
        <img className="overlay" src="https://res.cloudinary.com/dnld1cqvy/image/upload/v1700514321/Kaur%20Accounting/scanlines_gpbjnj.png" alt="CRT Overlay" />
        <video className="video-background" autoPlay muted playsInline loop={isLooping} preload="auto" src={videoLink} type="video/mp4" onEnded={handleVideoLoop}>
        </video>
      </div>
    </>
  );
}

export default Video;
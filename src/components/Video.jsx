function Video() {
  return (
    <>
      <div className="video-container">
        <img className="overlay" src="https://res.cloudinary.com/dnld1cqvy/image/upload/v1700514321/Kaur%20Accounting/scanlines_gpbjnj.png" alt="CRT Overlay" />
        <video className="video-background" autoPlay muted playsInline loop preload="auto" src="https://res.cloudinary.com/dnld1cqvy/video/upload/v1700503862/Kaur%20Accounting/video-loop-1_ibswlq.mp4" type="video/mp4">
        </video>
      </div>
    </>
  );
}

export default Video;
import { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "../video-footer/video-footer";
import VideoSideBar from "../video-sidebar/video-sidebar";

const VideoData = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState();
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5, // Adjust this threshold as needed
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.play();
  //       } else {
  //         entry.target.pause();
  //       }
  //     });
  //   }, options);

  //   observer.observe(videoRef.current);

  //   return () => {
  //     observer.unobserve(videoRef.current);
  //   };
  // }, []);
  return (
    <>
      <div className="video">
        <video
          className="video_player"
          loop
          ref={videoRef}
          onClick={handleVideoPress}
          src={url}
        />
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSideBar likes={likes} messages={messages} shares={shares} />
      </div>
    </>
  );
};

export default VideoData;

import { useEffect, useState } from "react";
import "./App.css";
import VideoData from "./components/video/video";

import Instance from "./components/axios";
import UploadVideo from "./components/upload-video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Instance.get("/posts");
      setVideos(res.data);
      return res;
    };
    fetchData();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app_videos">
        {videos ? (
          <>
            {videos.map((data) => {
              return (
                <>
                  <VideoData
                    url={data.url}
                    channel={data.channel}
                    description={data.description}
                    song={data.song}
                    likes={data.likes}
                    messages={data.messages}
                    shares={data.shares}
                  />
                </>
              );
            })}
          </>
        ) : (
          <>
            <p> Check your internet connection</p>
          </>
        )}
      </div>
      <UploadVideo />
    </div>
  );
}

export default App;

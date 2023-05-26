import { MusicNote } from "@mui/icons-material";
import "./video-footer.css";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <>
      <div className="videoFooter">
        <div className="videoFooter_text">
          <h3>@{channel}</h3>
          <p>{description}</p>
          <div className="videoFooter_ticker">
            <MusicNote fontSize="medium" className="videoFooter_icon" />
            <Ticker className=".ticker" mode="smooth">
              {({ index }) => (
                <>
                  <p>{song}</p>
                </>
              )}
            </Ticker>
          </div>
        </div>
        <img
          className="videoFooter_record"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="video footer"
        />
      </div>
    </>
  );
};

export default VideoFooter;

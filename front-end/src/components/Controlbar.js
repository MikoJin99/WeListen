import React from "react";

function ControlBar({ audioStream }) {
  return (
    <div className="controlBarWrapper">
      <div className="musicPlayer">
        <audio controls src={audioStream}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
      <div className="channelDetail">
        <div className="listener"></div>
        <div className="channelAdmin"></div>
      </div>
    </div>
  );
}

export default ControlBar;

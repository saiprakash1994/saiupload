import "./styles.css";
import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function App() {
  const [url, setUrl] = useState();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        placeholder="url"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      ></input>
      <iframe src={url}></iframe>
      <ReactPlayer
        url={url}
        config={{
          youtube: {
            playerVars: {
              preload: "auto",

              autoplay: true
            }
          }
        }}
      />
    </div>
  );
}

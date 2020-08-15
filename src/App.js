import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        ></img>
      </div>
      <h1>Instagram Clone | Vinothkumar S 🔥 🔥 🔥 </h1>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;

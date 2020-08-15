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
      <Post username = "vinoth_6194" caption = "I am pumed up" imageUrl = "https://i.morioh.com/200623/6c839150.jpg"/>
      <Post username = "chudar_619" caption = "Me too" imageUrl = "https://allvectorlogo.com/img/2017/10/facebook-messenger-logo.png"/>
      <Post username = "kiru_1849" caption = "Yes yes yes" imageUrl = "https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg"/>
      
    </div>
  );
}

export default App;

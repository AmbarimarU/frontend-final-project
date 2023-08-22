import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1> Welcome to the Little Herbal Store </h1>
      <div className="Home">
        <img
          src="https://www.euphoricherbals.com/cdn/shop/articles/Herbalism_edit.jpg?v=1658417693"
          alt="hers"
        />
      </div>
      <div className="about">
        <h2>
          Where all herbalist needs are met. Don't see what you need? Add it to
          the Products list for stocking'.
        </h2>
      </div>
    </div>
  );
}

export default Home;

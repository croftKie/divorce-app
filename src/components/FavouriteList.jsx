import React, { Component } from "react";
import { useState } from "react";

const FavouriteList = () => {
  // api data
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <h1>Favourited Items for gift ideas</h1>
      {/* <div></div> */}
      <div className="giftideas">
        <button
          style={{ color: liked ? "white" : "pink" }}
          onClick={() => setLiked(!liked)}
        >
          &#10084;
        </button>
      </div>
    </div>
  );
};

export default FavouriteList;

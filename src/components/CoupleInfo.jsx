import React, { component } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/coupleinfo.css";
const Coupleinfo = () => {
  const dispatch = useDispatch();

  const onInput = async (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <section className="coupleMain">
        <div className="personIcon">
          <p>Name</p>
          <img></img>
          <input></input>
        </div>
        <div className="personIcon">
          <p>Name2</p>
          <img></img>
          <input></input>
        </div>
      </section>
      <div className="reminderContainer"></div>
      <div className="buttonContainer">
        <button className="calendar">Calendar</button>
        <button className="giftIdeas">giftIdeas</button>
        <button className="favourites">Favourites</button>
        <button className="dateIdeas">Date Ideas</button>
      </div>
      <div className="searchContainer">
        <input
          id="search"
          onInput={onInput}
          type="text"
          placeholder="search..."
        />
      </div>
    </>
  );
};

export default Coupleinfo;

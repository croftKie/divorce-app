import React, { component } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventSelector } from "../store/features/eventSlice";
import "../css/coupleinfo.css";
const Coupleinfo = ({ currentId }) => {
  const dispatch = useDispatch();
  const events = useSelector(eventSelector);
  const selectedEvent = events.filter((event) => {
    return event.id === currentId;
  });

  return (
    <>
      <section className="coupleMain">
        <div className="personIcon">
          <p>{selectedEvent[0].person_one}</p>
          <img></img>
          <input></input>
        </div>
        <div className="personIcon">
          <p>{selectedEvent[0].person_two}</p>
          <img></img>
          <input></input>
        </div>
      </section>
      <div className="reminderContainer"></div>
      <div className="buttonContainer">
        <button className="calendar">Calendar</button>
        <button className="favouriteIdeas">favouriteIdeas</button>

        <button className="toDo">ToDo</button>
      </div>
    </>
  );
};

export default Coupleinfo;

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import { eventSelector, addEvent } from "../store/features/eventSlice";

const CalendarComp = ({ setPageState, setCurrentId }) => {
  const [value, onChange] = useState(new Date());
  const [clickedDate, setClickedDate] = useState();
  const nameRef = useRef();
  const nameRef1 = useRef();
  const nameRef2 = useRef();
  const events = useSelector(eventSelector);
  const dispatch = useDispatch();

  const onClickDay = (date) => {
    dispatch(
      addEvent({
        id: 101,
        date: date,
        name: nameRef.current.value,
        person_one: nameRef1.current.value,
        person_two: nameRef2.current.value,
      })
    );
  };

  const getEventID = () => {
    const selectedEvent = events.filter((event) => {
      return event.date === clickedDate;
    });
    console.log(selectedEvent);
    setCurrentId(selectedEvent[0].id);
    setTimeout(() => {
      setPageState(2);
    }, 1000);
  };

  return (
    <>
      <div>
        <div>
          <input ref={nameRef} type="text" placeholder="name of event" />
        </div>
        <div>
          <input ref={nameRef1} type="text" placeholder="name of person1" />
        </div>
        <div>
          <input ref={nameRef2} type="text" placeholder="name of person2" />
        </div>
        <div>
          <button
            onClick={() => {
              onClickDay(clickedDate);
            }}
          >
            Submit
          </button>
        </div>
        <Calendar
          onClickDay={(date) => {
            setClickedDate(JSON.stringify(date).slice(1, 11));
          }}
          value={value}
        />
        <button onClick={getEventID} className="go">
          GO
        </button>
      </div>
    </>
  );
};

export default CalendarComp;

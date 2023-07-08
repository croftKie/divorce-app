import React, { useState } from "react";
import Calendar from "react-calendar";

const CalendarComp = () => {
  const [value, onChange] = useState(new Date());

  const onClickDay = () => {};
  return (
    <>
      <div>
        <Calendar onClickDay={onClickDay} value={value} />
        <form>
          <div>
            <input type="text" placeholder="name of event" />
          </div>
          <div>
            <select placeholder="month">
              <option></option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div>
            <input placeholder="day" type="number" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CalendarComp;

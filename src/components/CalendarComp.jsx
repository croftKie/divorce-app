import React, { useState } from "react";
import Calendar from "react-calendar";

const CalendarComp = () => {
  const [value, onChange] = useState(new Date());

  const onClickDay = () => {
    console.log("hello");
  };
  return (
    <>
      <div>
        <Calendar onClickDay={onClickDay} value={value} />
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <select>
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
            <input type="number" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <div>
          <button>couples</button>
          <button>search</button>
          <button>todo</button>
          <button>favouritess</button>
        </div>
      </div>
    </>
  );
};

export default CalendarComp;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActionToDo, selectActionToDo } from "../store/features/todoSlice";
import { eventSelector } from "../store/features/eventSlice";

const ToDo = ({ currentId }) => {
  const events = useSelector(eventSelector);

  const actiontodo = useSelector(selectActionToDo);

  return (
    <>
      <div className="toDoListContainer">
        {events.map((action) => {
          return (
            <div className="card">
              <p className="name">{action.name}</p>
              <p className="date">{action.date}</p>
              <p className="person">{action.person}</p>
              <p className="description">{action.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ToDo;

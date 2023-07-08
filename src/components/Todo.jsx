import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActionToDo, selectActionToDo } from "../store/features/todoSlice";
import { eventSelector } from "../store/features/eventSlice";

const ToDo = ({ currentId }) => {
  const dispatch = useDispatch();
  const [action, setAction] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [importance, setImportance] = useState("");
  const events = useSelector(eventSelector);

  const actiontodo = useSelector(selectActionToDo);
  const handleActionChange = (e) => {
    setAction(e.target.value);
  };
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleImportanceChange = (e) => {
    setImportance(e.target.value);
  };
  const handleSubmit = (e) => {
    setToStorage();
  };
  const setToStorage = () => {
    localStorage.setItem("todos", JSON.stringify(actiontodo));
  };
  return (
    <>
      <div className="todolist">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={action}
            onChange={handleActionChange}
            placeholder="Action to do"
          />
          <input
            type="text"
            value={dueDate}
            onChange={handleDueDateChange}
            placeholder="Due date"
          />
          <select value={importance} onChange={handleImportanceChange}>
            <option value="">Select Importance</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div className="toDoListContainer">
        {actiontodo.map((action) => {
          return (
            <div className="card">
              <p>{action.actiontodo}</p>
              <p>{action.dueDate}</p>
              <p>{action.important}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ToDo;

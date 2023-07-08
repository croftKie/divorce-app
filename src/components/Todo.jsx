import React, { useState } from "react";
const ToDo = () => {
  const [action, setAction] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [importance, setImportance] = useState("");
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
    e.preventDefault();
    // Perform necessary actions with the form data
    console.log("Action:", action);
    console.log("Due Date:", dueDate);
    console.log("Importance:", importance);
    // Reset form inputs
    setAction("");
    setDueDate("");
    setImportance("");
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
    </>
  );
};
export default ToDo;

import React, { useState } from "react";
import "./TodoItem.css";
import Checker from "../../assets/Checker.png";
const TodoItem = ({ isComplete = false, children, id, deleteCallback }) => {
  const [isChecked, setChecked] = useState(isComplete);
  return (
    <div className="wrapper">
      <button
        onClick={() => setChecked(!isChecked)}
        className={"checker " + (isChecked ? "active" : "")}
        style={{ backgroundImage: isChecked ? `url(${Checker})` : "" }}
      ></button>
      <li style={{ textDecoration: isChecked ? `line-through` : "" }}>
        {children}
      </li>
      <button
        className="delete"
        onClick={() => {
          deleteCallback(id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;

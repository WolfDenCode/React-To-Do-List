import React, { useRef, useState } from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const startingData = [
    { title: "#1 Task", id: Date.now() + 1 },
    { title: "#2 Task", id: Date.now() + 2 },
    { title: "#3 Task", id: Date.now() + 3 },
    { title: "#4 Task", id: Date.now() + 4 },
  ];

  const [currentItems, setCurrentItems] = useState(startingData);
  const [newItemTitle, setNewItemTitle] = useState(""); // State to track input value

  function addItem(newItem) {
    setCurrentItems([...currentItems, newItem]);
  }

  function deleteItem(itemToDelete) {
    setCurrentItems(currentItems.filter((item) => item.id !== itemToDelete));
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="list-input">
        <input
          type="text"
          placeholder="Add Item..."
          value={newItemTitle} // Bind input value to state
          onChange={(e) => setNewItemTitle(e.target.value)} // Update state on input change
        />
        <button
          id="submit"
          onClick={() => {
            const trimmedTitle = newItemTitle.trim();
            if (trimmedTitle) {
              const newItem = {
                title: trimmedTitle,
                id: Date.now(),
              };
              addItem(newItem);
              setNewItemTitle(""); // Clear input field after adding
            }
          }}
          disabled={!newItemTitle.trim()} // Disable if input is empty or just spaces
        >
          +
        </button>
      </div>
      <div className="list-items">
        <ul className="element-list">
          {currentItems.map((item) => (
            <TodoItem deleteCallback={deleteItem} key={item.id} id={item.id}>
              {item.title}
            </TodoItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

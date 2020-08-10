import React, { useReducer, useState } from "react";
import "./App.css";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      let newTask = { task: payload, complete: false };
      const newTodos = [...state.todos];
      newTodos.push(newTask);
      return {
        ...state,
        todos: newTodos
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === payload ? { ...todo, complete: !todo.complete } : todo
        )
      };
    default:
      return state;
  }
};

const App = () => {
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [{ task: "Wash the car", complete: false }]
  });
  const [input, setInput] = useState("");

  const handleSubmitBtn = () => {
    if (input === "") return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  const handleTodo = (index) => {};

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmitBtn}>Submit</button>
      <h1>Hello functional component</h1>
      {todos.length > 0 ? (
        <ul>
          {" "}
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.task}{" "}
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={(e) =>
                  dispatch({ type: "UPDATE_TODO", payload: index })
                }
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing to do yet!</p>
      )}
    </div>
  );
};

export default App;

import React, { useReducer, useState } from "react";
import "./App.css";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      const newTodos = [...state.todos];
      newTodos.push(payload);
      return {
        ...state,
        todos: newTodos
      };
    default:
      return state;
  }
};

const App = () => {
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: ["Wash the car"]
  });
  const [input, setInput] = useState("");

  const handleSubmitBtn = () => {
    if (input === "") return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

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
          {todos.map((todo, key) => (
            <li key={key}>{todo}</li>
          ))}
        </ul>
      ) : (
        <p>Nothing to do yet!</p>
      )}
    </div>
  );
};

export default App;

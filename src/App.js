import React, { useReducer, useState } from "react";
import "./sass/main.scss";

import SearchBar from './components/SearchBar';

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
    <section className="search">
        <div className="search-bar">
            <div className="search-bar__form-input">
                <i className="material-icons">work_outline</i>
                <SearchBar placeholder="Title, companies, expertise or benefits" />
                <button className="btn">Search</button>
            </div> 
        </div>
        <div className="search-body">
            
          <aside className="search-criteria">
              <label className="search-option">Full time
                  <input type="checkbox" />
                  <span className="checkmark"></span>
              </label>
              <h3 className="search__subtitle">Location</h3>
              <div className="search-bar__form-input">
                  <i className="material-icons">public</i>
                  <SearchBar placeholder="City, state, zip code or country" />
              </div>
              <div className="search__cities">
                <label className="search-option city">London
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="search-option city">Amsterdam
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="search-option city">New York
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="search-option city">Berlin
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
              </div>
          </aside>

          <main className="search-results">
              <div className="card">
                  <div className="card__img">not found</div>
                      <div className="card__body">
                          <div className="card__info">
                              <h2 className="card__company">New York University</h2>
                              <h1 className="card__position">Front-End Software Engineer</h1>
                              <h3 className="card__highlight">Full time</h3>
                          </div>
                          <ul className="card__tags">
                              <li className="card__tag"><i className="material-icons">public</i> New York</li>
                              <li className="card__tag"><i className="material-icons">access_time</i> 5 days ago</li>
                          </ul>
                  </div> 
              </div> 

          </main>
        </div>
    </section>
  );
};

export default App;

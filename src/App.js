import React, { useReducer, useState } from "react";
import "./sass/main.scss";

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
    <section class="search">
        <div class="search-bar">
            <div class="search-bar__form-input">
                <i class="material-icons">work_outline</i>
                <input type="text" class="search-bar__input" placeholder="Title, companies, expertise or benefits" />
                <button class="btn">Search</button>
            </div>
            
        </div>
        <div class="search-body">
            
          <aside class="search-criteria">
              <label class="search-option">Full time
                  <input type="checkbox" />
                  <span class="checkmark"></span>
              </label>
              <h3 class="search__subtitle">Location</h3>
              <div class="search-bar__form-input">
                  <i class="material-icons">public</i>
                  <input type="text" class="search-bar__input" placeholder="City, state, zip code or country" />
              </div>
              <div class="search__cities">
                <label class="search-option city">London
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="search-option city">Amsterdam
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="search-option city">New York
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="search-option city">Berlin
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
              </div>
          </aside>

          <main class="search-results">
              <div class="card">
                  <div class="card__img">not found</div>
                      <div class="card__body">
                          <div class="card__info">
                              <h2 class="card__company">New York University</h2>
                              <h1 class="card__position">Front-End Software Engineer</h1>
                              <h3 class="card__highlight">Full time</h3>
                          </div>
                          <ul class="card__tags">
                              <li class="card__tag"><i class="material-icons">public</i> New York</li>
                              <li class="card__tag"><i class="material-icons">access_time</i> 5 days ago</li>
                          </ul>
                  </div> 
              </div> 

          </main>
        </div>
    </section>
  );
};

export default App;

import React from "react";
import "./sass/main.scss";

import Main from './components/Main';

import MyProvider from './store/MyContext';

const App = () => {

  return (
    <MyProvider>
      <h1 className="title"><span className="highlight">Github</span> Jobs</h1>
        <Main />
    </MyProvider>
  );
};




export default App;

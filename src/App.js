import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./sass/main.scss";

import Main from './components/Main';
import Details from './components/Details';

import MyProvider from './store/MyContext';

const App = () => {

  return (
    <MyProvider>
      <h1 className="title"><span className="highlight">Github</span> Jobs</h1>
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/:id" component={Details} />
      </Router>
    </MyProvider>
  );
};




export default App;

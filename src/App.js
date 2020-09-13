import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./sass/main.scss";

import Main from './components/Main';
import Details from './components/Details';

import MyProvider,{ MyContext } from './store/MyContext';
import { updateSearchInput } from './store/actions';

const App = () => {

  return (
    <MyProvider>
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/:id" component={Details} />
      </Router>
    </MyProvider>
  );
};




export default App;

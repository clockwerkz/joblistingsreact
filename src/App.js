import React, { useContext, useState } from "react";
import "./sass/main.scss";

import Main from './components/Main';

import MyProvider,{ MyContext } from './store/MyContext';
import { updateSearchInput } from './store/actions';

const App = () => {

  return (
    <MyProvider>
      <Main />
    </MyProvider>
  );
};




export default App;

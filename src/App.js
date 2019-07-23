import React from 'react';
import Loadable from 'react-loadable';
import {RouteComsumer } from './Context';
import './App.css';

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      {"ffffgggg"}
      {props.children}
    </div>
  );
}

export default App;

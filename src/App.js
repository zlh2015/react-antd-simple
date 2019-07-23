import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {signInPage} from './pages/sign'
import Loadable from 'react-loadable';
import {RouteComsumer } from './Context';
import './App.css';

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <RouteComsumer>
      </RouteComsumer>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch } from 'react-router-dom';
import { GlobalConsumer } from './Context';
import './App.css';

const App = (props) => {
  const path = props.path ? props.path : "/";
  return (
    <div className="App">
      <GlobalConsumer>
      {
        ({mt}) => {
          return (
            <Switch>
              { mt.getRedirectByPath(path)}
              { mt.getRouteByPath(path)} 
            </Switch>
          );
        }
      }
      </GlobalConsumer>
    </div>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={LoginPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </div>
  );
}

export default App;

    import React from 'react';
    import { Route } from 'react-router-dom';
    import { signInPage, signUpPage, signOutPage} from './pages/sign';
    import HomePage from './pages/home';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <Route path="/" component={signInPage} exact />
          <Route path="/signin" component={signInPage} />
          <Route path="/signup" component={signUpPage} />
          <Route path="/signout" component={signOutPage} />
          <Route path="/home" component={HomePage} />
        </div>
      );
    }

    export default App;

import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../styles/App.scss';
import LandingPage from './LandingPage';
import Home from './Home';
import Profile from './Profile';
import Journal from './Journal';
import About from './About';
import SideNav from './SideNav';

// Context to track whether the user is logged in or not
export const authContext = createContext({
  authenticated: false,
  setAuthenticated: (auth) => {}
});

export default function App() {
  const [ authenticated, setAuthenticated ] = useState(false);

  return (
    <div className="App">
      <Router basename='/google-fit-web'>
        <authContext.Provider value={{authenticated, setAuthenticated}}>
          <div className="sideNav">
            <SideNav/>
          </div>
        </authContext.Provider>
        <Switch>
          <div className="content">
          <Route exact path='/'>
            {authenticated ? <Home /> : <LandingPage />}
          </Route>
          <Route exact path='/profile'>
            {authenticated ? <Profile /> : <LandingPage />}
          </Route>
          <Route exact path='/journal'>
            {authenticated ? <Journal /> : <LandingPage />}
          </Route>
          <Route exact path='/about'>
            {authenticated ? <About /> : <LandingPage />}
          </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}
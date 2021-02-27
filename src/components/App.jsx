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

// Context to keep access token for API calls
export const tokenContext = createContext({
  token: '',
  setToken: (token) => {}
});


export default function App() {
  const [ authenticated, setAuthenticated ] = useState(false);
  const [ token, setToken] = useState('');

  return (
    <div className="App">
      <Router basename='/google-fit-web'>
        <authContext.Provider value={{authenticated, setAuthenticated}}>
          <tokenContext.Provider value={{token, setToken}}>
            <div className="sideNav">
              <SideNav authenticated={authenticated}/>
            </div>
          </tokenContext.Provider>
        </authContext.Provider>
        <Switch>
          <div className="content">
            <Route exact path='/'>
              {authenticated ? <Home /> : <LandingPage />}
            </Route>
            <Route exact path='/profile'>
              {authenticated ? <Profile token={token}/> : <LandingPage />}
            </Route>
            <Route exact path='/journal'>
              {authenticated ? <Journal /> : <LandingPage />}
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}
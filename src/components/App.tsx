import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import '../styles/App.scss';
import LandingPage from './LandingPage';
import Home from './Home';
import Profile from './Profile';
import Journal from './Journal';
import About from './About';
import SideNav from './SideNav';

// Context to track whether the user is logged in or not
export const authContext = createContext({
  authenticated: false,
  setAuthenticated: (auth : boolean) => {}
});

export default function App() : JSX.Element {
  const [ authenticated, setAuthenticated ] = useState(false);

  return (
    <div className="App">
      <Router basename='/google-fit-web'>
        <authContext.Provider value={{authenticated, setAuthenticated}}>
          <SideNav/>
        </authContext.Provider>
        <Switch>
          <Route exact path='/'>
          {authenticated ? <Home /> : <LandingPage />}
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/journal'>
            <Journal />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
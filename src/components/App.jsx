/* Packages */
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
/* Styles */
import '../styles/App.scss';
/* Child Components */
import LandingPage from './LandingPage';
import Home from './Home';
import Profile from './Profile';
import Journal from './Journal';
import About from './About';
import SideNav from './SideNav';
/* Util */
import { blankUser } from '../util/UserProfile';

// Context to track basic user info
export const userContext = createContext({
  user: blankUser,
  setUser: (user) => {}
});

/** App */
export default function App() {
  const [ user, setUser] = useState(blankUser);

  return (
    <div className="App">
      <Router basename='/google-fit-web'>
        <userContext.Provider value={{user, setUser}}>
          <div className="sideNav">
            <SideNav authenticated={user.authenticated}/>
          </div>
        </userContext.Provider>
        <Switch>
          <div className="content">
            <Route exact path='/'>
              {user.authenticated ? <Home user={user}/> : <LandingPage />}
            </Route>
            <Route exact path='/profile'>
              {user.authenticated ? <Profile user={user}/> : <LandingPage />}
            </Route>
            <Route exact path='/journal'>
              {user.authenticated ? <Journal user={user}/> : <LandingPage />}
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
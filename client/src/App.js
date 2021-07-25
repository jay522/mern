import React, { createContext, useReducer } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';
import Footer from './components/Footer';

import { initialState,reducer } from './components/reducer/UseReducer';

  //1: ContextAPI
  export const userContext=createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <>
     <userContext.Provider value={{state,dispatch}}>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route>
        <Errorpage />
      </Route>
      </Switch>
      <Footer />
     </userContext.Provider>
    </>
  );
}

export default App;

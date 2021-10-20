import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, Redirect, userParams } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Editions from './pages/Editions/Editions';
import IndexPage from './pages/IndexPage/IndexPage';
import Login from './pages/Login/Login';

const  App = () => {
  return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component = {IndexPage}  />
            <Route path="/contact" exact component = {Contact}  />
            <Route path="/editions" exact component = {Editions}  />
            <Route path="/login" exact component = {Login}  />
          </Switch>
        </BrowserRouter>
  ) 
}

export default App;



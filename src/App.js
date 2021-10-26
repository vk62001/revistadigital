import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Editions from './pages/Editions/Editions';
import IndexPage from './pages/IndexPage/IndexPage';
import Login from './pages/Login/Login';
import Formulario from './pages/Register/Formulario';
import About from './pages/AboutRevist/AboutRevist';
import Comments from './pages/Comments/Comments';

const  App = () => {
  return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component = {IndexPage}  />
            <Route path="/contact" exact component = {Contact}  />
            <Route path="/editions" exact component = {Editions}  />
            <Route path="/login" exact component = {Login}  />
            <Route path="/formulario" exact component = {Formulario}/>
            <Route path="/about" exact component = {About}/>
            <Route path="/comments" exact component = {Comments}/>
          </Switch>
        </BrowserRouter>
        
  ) 
}

export default App;



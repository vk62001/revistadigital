import React, {useEffect, useState, useCallback} from 'react';
import {  Route, Switch} from 'react-router-dom';
import {AuthContext} from './context/auth-context';
import './App.css';
import Contact from './pages/Contact/Contact';
import Editions from './pages/Editions/Editions';
import IndexPage from './pages/IndexPage/IndexPage';
import Login from './pages/Login/Login';
import Formulario from './pages/Register/Formulario';
import About from './pages/AboutRevist/AboutRevist';
import Comments from './pages/Comments/Comments';
import Administrator from './pages/Admistrator/Administrator';
import SocialCount from './components/SocialCount';
import Revista from './pages/Revista/Revista';

const  App = () => {
 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  

  const login = useCallback((user)=>{
    setUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('userData', JSON.stringify(user))
  },[]);

   const logout = () => {
     console.log("Entre al logout")
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('userData');
   

   };


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token) {
      login(storedData, storedData.token);
    }
  }, [login]);
  


  let routes;

  if(user){
    routes = (
      <Switch>
        <Route path="/" exact component={IndexPage}  />
        <Route path="/contact" exact component={Contact}  />
        <Route path="/editions" exact component={Editions}  />
        <Route path="/formulario" exact component={Formulario}/>
        <Route path="/about" exact component={About}/>
        <Route path="/comments" exact component={Comments}/>
        {user.admin &&
          <Route path={"/admin"} exact component={Administrator} />
        }
      </Switch>
    );
  }else{
    routes = (
      <Switch>
        <Route path="/" exact component = {IndexPage}  />
        <Route path="/contact" exact component = {Contact}  />
        <Route path="/login" exact component = {Login}  />
        <Route path="/formulario" exact component = {Formulario}/>
        <Route path="/about" exact component = {About}/>
        <Route path="/comments" exact component = {Comments}/>
        <Route path="/revista/:slug" component={Revista} />
      </Switch>
    );
  }

  return (
        <AuthContext.Provider value={
          {
            isLoggedIn: isLoggedIn,
            user: user,    
            login: login,
            logout: logout

          }
        }>
         
              {routes}
          
          </AuthContext.Provider>
  ) ;
};


export default App;






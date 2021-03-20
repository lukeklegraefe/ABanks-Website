import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Modules from './components/pages/Modules';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';

document.title = "aBanks";

function App() {
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg, 
      password: passwordReg
    }).then((response)=> {
      console.log(response);
    })
  }

  const checkLoginStatus = () => {
    Axios.get("http://localhost:3001/login", { withCredentials: true }).then(response => {
      console.log("logged in?", response);
    }).catch(error => {
      console.log("check login error", error);
    })
  }
  
  if(localStorage.getItem('token')){
    return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/modules' exact component={Modules}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/about' exact component={About}/>
          <Route path='/logout' exact component={Logout}/>
        </Switch>
      </Router>
    );
  }
  else{
    return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/about' exact component={About}/>
          <Route path='/login' exact component={Login}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

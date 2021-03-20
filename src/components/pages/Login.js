import React, { useState } from 'react';
import './Pages.css';
import './Login.css';
import Axios from 'axios';

export default function Login() {
    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loginStatus, setLoginStatus] = useState("")

    const register = () => {
     Axios.post("http://localhost:3001/register", {
      username: usernameReg, 
      password: passwordReg
     }).then((response)=> {
      console.log(response);
     })
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
         username: username, 
         password: password,
        }).then((response)=> {
            if(response.data.message){
                setLoginStatus(response.data.message);
            }
            else{
                setLoginStatus(response.data[0].UserID);
                console.log(response);
                window.location.reload(true);
                window.location.replace("/")
                localStorage.setItem('token', response);
            }
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload(true);
    };

    function logged(props){
        const isLoggedIn = props
    }

    if(loginStatus == "" || loginStatus == "Wrong username / password"){
        return (
            <>
                <h1 className='login'>Login</h1>
                <div className="loginUI">
                    <label className="loginUSR">Username: </label>
                    <input type="text" onChange={(e)=> {
                        setUsername(e.target.value)
                        //setUsernameReg to register
                        }}
                    />
                    <label className="loginPASS">Password: </label>
                    <input type="password" onChange={(e)=> {
                        setPassword(e.target.value)
                        //setPasswordReg to register
                        }}
                    />
                    <button className="loginBTN" onClick={login}>Login</button>
                </div>
                <h1 className="confirmation">{loginStatus}</h1>
            </>
        );
    }
    else{
        return (
            <>
                <h1 className='login'>Welcome, {loginStatus}</h1>
                <div className="loginUI">
                    <label className="loginUSR">Username: </label>
                    <input type="text" onChange={(e)=> {
                        setUsername(e.target.value)
                        //setUsernameReg to register
                        }}
                    />
                    <label className="loginPASS">Password: </label>
                    <input type="password" onChange={(e)=> {
                        setPassword(e.target.value)
                        //setPasswordReg to register
                        }}
                    />
                    <button className="loginBTN" onClick={logout}>Logout</button>
                </div>
            </>
        );
    }

   
}
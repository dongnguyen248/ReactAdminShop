import { useState } from "react";
import {login} from "../../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import "./login.css";

const Login = () => {
  const usered = useSelector((state) => state.user);
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const dispatch = useDispatch();
    const handleLogin = (e)=>{
        e.preventDefault();
        login(dispatch,{username,password});
    }
    return (
        <div className="wrapLogin">
        <h1>Admin Login</h1>
        <input className="nameLogin" type="text" placeholder="your name...." onChange={(e)=>setUsername(e.target.value)}/>
        <input className="passwordLogin" type="password" placeholder="your password.." onChange={(e)=>setPassword(e.target.value)}/>
        {usered.error && <p className="errorLogin"> Somthing went wrong...</p>}
        <button className="btnLogin" onClick={handleLogin}>Login</button>
            
        </div>
    )
}

export default Login

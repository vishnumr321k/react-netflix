import React, { useEffect } from "react";
import Home from "./components/pages/Home/Home";
import Login from './components/pages/Login/Login.jsx'
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./components/pages/Player/Player.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { ToastContainer, toast } from 'react-toastify';


export const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log('Logged In');
        navigate('/');
      }else{
        console.log('Logged Out');
        navigate('/login')
      }
    })
  }, []) 

  return (
    <div>
    <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/player/:id" element = {<Player/>}/>
      </Routes>
    </div>
  );
};

export default App;

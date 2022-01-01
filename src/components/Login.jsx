import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 

function handleEmail(event){
  setEmail(event.target.value);
}
function handlePassword(event){
  setPassword(event.target.value);
}
function handleClick(){
  console.log(email);
  console.log(password);
  event.preventDefault();
}

  return (
    <div className="login-box">
      <div className="login-box-content">
        <form type="post">
          <input onChange={handleEmail} type="email" placeholder="Email" value={email} />
          <input onChange={handlePassword} type="password" placeholder="Password" value={password} />
          <button onClick={handleClick} type="submit">Log In</button>
        </form>
        <div className="flex">
          <hr className="left" />
          <h3>OR</h3>
          <hr className="right" />
        </div>
        <div className="login-box-other">
          <button type="button">Log In using Gmail </button><br /><br />
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;

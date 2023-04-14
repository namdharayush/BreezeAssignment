import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth} from './Fire'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate()

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          history('/login')
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
      toast.success("User Created Successfully");
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
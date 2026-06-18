import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const SignUpPage = () => {

  const [formData, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const[isSignIn,setSignIn]=useState(false)
  const handlechange = (e) => {
    setformdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = async(e) => {
    e.preventDefault()
    try{
        const response=await axios.post('https://backend-x7uu.onrender.com//register',
            formData
        )
        setSignIn(true)
        console.log(response.data)
    }catch(err){
        console.log(err)
    } }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h2>Sign Up Form</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text"
           id="username"
            name="username" 
            value={formData.username} 
            onChange={handlechange} 
            required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" 
          id="email" name="email" 
          value={formData.email}
           onChange={handlechange} 
           required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password"
           id="password"
            name="password"
             value={formData.password}
              onChange={handlechange} 
               required />
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
        {isSignIn && <p>Signup successful 🎉</p>}
      </form>
    </div>
  );
};

export default SignUpPage;

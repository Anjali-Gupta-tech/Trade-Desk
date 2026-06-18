import React from 'react'
import axios from 'axios'
import {useState} from 'react'
const LoginPage = () => {
  
    const [ formData,setFormData]=useState({
        email:'',
        password:''
    })
    const[isLoggedIn,setLoginIn]=useState(false)
   const handleChange=(e)=>{
      setFormData({
        ...formData,
    [e.target.name]:e.target.value
      })
    }
  const  handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response= await axios.post('https://trade-desk-9c1v.onrender.com/login',formData)
            console.log(response.data)
            setLoginIn(true)
        }catch(err){
            console.log(err)
        }
    } 
    return(
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type='email'
             id='email' 
             name='email' 
             onChange={handleChange}
            value={formData.email} 
            required />
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input type='password'
             id='password' 
             name='password'
            value={formData.password} 
            onChange={handleChange}
            required />
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
        {isLoggedIn && <p>Login successful</p>}
      </form>
    </div>
  
  )
}

export default LoginPage

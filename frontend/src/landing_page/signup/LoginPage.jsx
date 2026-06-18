
import React, { useState } from "react";
import axios from "axios";
import{useNavigate} from 'react-router-dom';
const LoginPage = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isLogin, setLogin] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-x7uu.onrender.com/login",
        formData
      );
      console.log(response.data);
      setLogin(true);
       window.location.href = "https://tradedesk-dashboard.onrender.com" 
    
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm bg-white"
          >
            <h3 className="text-center mb-4">Login</h3>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>

            {/* Success Message 
            {isLogin && (
              <p className="text-success text-center mt-3">
                Login successful 🎉
              </p>
            )}*/}
          </form>
         <div className='mt-3 text-center'>
           Don't have an account? <a href="/signup">Sign up here</a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;





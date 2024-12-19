import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import image from "../images/image.png"

import { Login as LoginApi } from "../api/authApi";

function Login() {

  const [loginData,setLoginData] = useState({
    email:"ayush@gmail.com",
    password:"12345678"
  })

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();
    LoginApi(loginData,navigate)
  }


  const handleChange = (e) => {
  const  value = e.target.value
  setLoginData((prev)=>{
    return {...prev,[e.target.name]:value}
  })
  }

  return (
      <div className='bg-yellow-100 flex items-center justify-center h-screen '>
        <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
          <div className="w-full lg:w-1/2    lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
            <img src={image} alt="" className="  2xl w-auto object-cover " />
          </div>
          <form className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
              <div className="w-full space-y-5">
                <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
                  <span className="text-3xl font-semibold text-gray-700">Login</span>
                </div>
                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5  mx-auto">
                    <span className=" text-lg text-gray-800 tracking-wide">Email</span>
                    <span className="">
                      <input type="text"
                        className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                        value={loginData.email}
                        onChange={handleChange} 
                        name='email'
                        />
                    </span>
                  </label>
                </div>
                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5  mx-auto">
                    <span className=" text-lg text-gray-800 tracking-wide">Password</span>
                    <span className="">
                      <input type="password"
                        className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                        value={loginData.password}
                        onChange={handleChange}
                        name='password'
                        />
                    </span>
                  </label>
                </div>
                <div className="form-element">
                  <div className="w-full lg:w-4/5  mx-auto flex items-center justify-between">
                    <label className=" text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                      <input type="checkbox" name="" id="" />
                      <span className=" text-gray-800 tracking-wide">Remember me</span>
                    </label>
                    <Link to="/register" className=" text-gray-800 tracking-wide">Create New Account</Link>
                    <button type="button" className=" text-gray-800 tracking-wide inline- border-b border-gray-300">Forgot Password?</button>
                  </div>
                </div>
                <div className="form-element">
                  <span className="w-full lg:w-4/5  mx-auto ">
                    <input type="submit" onClick={handlesubmit} className="cursor-pointer border-2 border-yellow-200 w-full p-3 bg-yellow-200 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all" />
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;

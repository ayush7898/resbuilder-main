import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../images/image.png"
import { Register as RegisterApi } from '../api/authApi';
function Register() {

  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    email: "",
    phoneNumber: ""
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterApi(registerData, navigate)
  }
  const handleChange = (e) => {
    const value = e.target.value
    setRegisterData((prev) => {
      return { ...prev, [e.target.name]: value }
    })
  }
  return (
    <div className='bg-yellow-100 flex items-center justify-center h-screen '>
      <div className="registration-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
        <div className="w-full lg:w-1/2 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
          <img src={image} alt="" className="  2xl w-auto object-cover " />
        </div>
        <form className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-5">
              <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
                <span className="text-3xl font-semibold text-gray-700">Register</span>

              </div>
              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Name</span>
                  <span className="block">
                    <input type="text"
                      className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                      name='name'
                      placeholder='ENTER YOUR NAME'
                      value={registerData.name}
                      onChange={handleChange} />
                  </span>
                </label>
              </div>
              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Email</span>
                  <span className="block">
                    <input
                      type="email"
                      className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                      name='email'
                      placeholder='ENTER YOUR EMAIL'
                      value={registerData.email}
                      onChange={handleChange} />
                  </span>
                </label>
              </div>
              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Password</span>
                  <span className="block">
                    <input
                      type="password"
                      className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                      name='password'
                      placeholder='ENTER YOUR PASSWORD'
                      value={registerData.password}
                      onChange={handleChange} />
                  </span>
                </label>
              </div>
              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Phone Number</span>
                  <span className="block">
                    <input type="text"
                      className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                      name='phoneNumber'
                      placeholder='ENTER YOUR PHONE NUMBER'
                      value={registerData.phoneNumber}
                      onChange={handleChange} />
                  </span>
                </label>
              </div>
              <div className="form-element">
                <div className="w-full lg:w-4/5 block mx-auto flex items-center justify-between">
                  <label className="block text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                    <input type="checkbox" name="" id="" />
                    <span className="block text-gray-800 tracking-wide">Remember me</span>
                  </label>
                  <Link to="/login" className="block text-gray-800 tracking-wide">Already  Have An Account</Link>
                  <button type="button" className="block text-gray-800 tracking-wide inline-block border-b border-gray-300">Forgot Password?</button>
                </div>
              </div>
              <div className="form-element">
                <span className="w-full lg:w-4/5 block mx-auto ">
                  <input type="submit"
                    className="cursor-pointer border-2 border-yellow-200 w-full p-3 bg-yellow-200 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all"
                    onClick={handleSubmit}
                  />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

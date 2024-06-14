import React, { useState } from "react";
// import {useDispatch , useSelector} from 'react-redux'
import { Link } from "react-router-dom";
const FormPage = () => {
  // const dispatch = useDispatch();
  const [formSet, setForm] = useState({
    email: "",
    password: null,
  });
  // change handler apply here
  const changeHandler = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        // to specific the name in the form here,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <div className="w-full  mt-36 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6  py-4">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Please enter your details
          </p>
          {/* form section apply here  so we get */}
          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                required="true"
                name="email"
                value={formSet.email}
                onChange={changeHandler}
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                required="true"
                value={formSet.password}
                onChange={changeHandler}
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            {/* forget password  */}
            <div className="flex items-center justify-between mt-4">
              <button className=" w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
            <br></br>
            
              {/* <p className=" cursor-pointer text-sm underline text-gray-600 dark:text-gray-200 hover:text-gray-500">
              <Link to='/Register'>
                CreateRegister
              </Link>      


              </p> */}
          </form>
          {/* from break here so we get */}
        </div>
      </div>
    </div>
  );
};

export default FormPage;

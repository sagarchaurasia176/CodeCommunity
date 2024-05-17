import React, { useContext, useState } from "react";
import codeCommnity from "../assets/logo.png";
import { StateManagerByContext } from "@/context/MainContextPage";
// colsed eye
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// form page function apply here
function FormPage() {
  //management destruct here
  const {
    Password,
    setPassword,
    setLogin,
    LoginState,
    FormHandler,
    resetpassword,
    setConfirmPassword,
  } = useContext(StateManagerByContext);

  //navigate apply here
  const navigator = useNavigate();
  // password check handler apply here
  const FormSubmitHandler = (e) => {
    e.preventDefault();
    if (LoginState.password != LoginState.resetPassword) {
      toast.error("password not matched");
      setLogin(false);
    } else {
      setLogin(true);
      toast.success("login succesfully");
      navigator("/MainPage");
    }
  };

  return (
    <div>
      <form
        onSubmit={FormSubmitHandler}
        // onSubmit={FormDataSaver}
        className="max-w-sm mx-auto my-4 bg-slate-800 p-10 rounded-md"
      >
        <div className=" flex lg:flex-1  mb-5 space-x-9 p-2 border-black border-b-2">
          <NavLink to="/">
            <img
              src={codeCommnity}
              className=" bg-black rounded-md p-1 size-8"
              alt=""
            />
            <span className="  font-semibold text-white">Code Community</span>
          </NavLink>
        </div>

        <div className=" mb-5 ">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Your email
          </label>
          <input
            type="email"
            value={LoginState.username}
            onChange={FormHandler}
            name="username"
            className="bg-gray-50 border text-black font-medium border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="cc@gmail.com"
            required
          />
        </div>

        {/* password apply here  */}

        <div className="mb-5 ">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Password
          </label>

          <input
            type={!Password ? "password" : "text"}
            onChange={FormHandler}
            name="password" // onChange={InputCheckHandler}
            value={LoginState.password}
            placeholder="********"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />

          {/* onClick btn apply for the span part */}
          <span
            className=" cursor-pointer  
              mt-[-29px] absolute  ml-[280px] text-black "
            onClick={() => setPassword((prev) => !prev)}
          >
            {/* password eye concepts  */}
            {Password ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>




        {/* Resart-password apply here  */}
        <div className="mb-5 mt-7 ">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Reset-Password
          </label>

          <input
            type={!resetpassword ? "password" : "text"}
            onChange={FormHandler}
            name="resetPassword" // onChange={InputCheckHandler}
            value={LoginState.resetpassword}
            placeholder="********"
            className="bg-gray-50 border placeholder:text-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />

          {/* onClick btn apply for the span part */}
          <span
            className=" cursor-pointer 
              mt-[-29px] absolute  ml-[280px] text-black "
            onClick={() => setConfirmPassword((prev) => !prev)}
          >
            {resetpassword? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {/* sign in btn apply here */}
        <button
          // onClick={() => InputCheckHandler()}
          className="text-white  mt-7  duration-500 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
           font-medium rounded-lg text-sm lg:w-full  w-full
           px-5 py-2.5 text-center dark:bg-blue-600
            dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          LogIn
        </button>

        {/* divider */}
        <div className=" block border-opacity-50 ">
          <div className="divider text-white">OR</div>
          {/* google authentication provider */}
          <button className="text-white  w-full duration-500 bg-slate-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign in with Google
          </button>
        </div>
      </form>
      {/* auth proveider */}
    </div>
  );
}

export default FormPage;

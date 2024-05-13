import React from "react";
import codeCommnity from "../assets/logo.png";


function FormPage() {
  return (
    <div>
      <form className="max-w-sm mx-auto my-24 bg-slate-800   p-10 rounded-md">
        <div className=" flex lg:flex-1 mb-12  space-x-9 p-2 border-black border-b-2">
          <img
            src={codeCommnity}
            className=" bg-black rounded-md p-1 size-8"
            alt=""
          />
          <span className=" font-semibold text-white">Code Community</span>
        </div>

        <div className=" mb-5  ">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="cc@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white  duration-500 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
           font-medium rounded-lg text-sm lg:w-full  w-full
           px-5 py-2.5 text-center dark:bg-blue-600
            dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          LogIn
        </button>
              {/* divider */}
        <div className=" block border-opacity-50 ">
  
          <div className="divider text-white">OR</div>
          <button
          type="submit"
          className="text-white  w-full duration-500 bg-slate-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign in with Google
        </button>
        </div>
      </form>

      {/* auth proveider */}
    </div>
  );
}

export default FormPage;

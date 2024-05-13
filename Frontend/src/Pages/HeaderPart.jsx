import React from "react";
import logo from "../assets/logo.png";
import CreatePost from "./Post/CreatePost";
const HeaderPart = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <img src={logo} className="w-10" alt="logo of code" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            {/* logoin */}
            <CreatePost/>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPart;

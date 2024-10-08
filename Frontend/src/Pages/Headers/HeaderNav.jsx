import React from "react";
import CreatePost from "../Post/CreatePost";
// import ThemeBar from "./ThemeBar";
// import ThemeBar from "./ThemeBar";
import Logo from "../../assets/logo.png";
const HeaderNav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={Logo} alt="" className='w-10 rounded-full'/>
        </div>

        <div className="flex-none gap-2">
          <div>
            <CreatePost />
            {/* <ThemeBar /> */}
          </div>
          <div className=" rounded-md">
            {/* <ThemeBar /> */}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
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
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow 
              menu menu-sm dropdown-content bg-base-100
               rounded-box w-52"
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

export default HeaderNav;

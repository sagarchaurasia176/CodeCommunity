import React, { createContext, useState , useEffect } from "react";

//create context apply here
export const StateManagerByContext = createContext();
//provider
const MainContextPage = ({ children }) => {
  //apply concept here
  const [LoginState, setLoginState] = useState({
    // passed all the input field which applied into the login
    username: "",
    password: null,
    resetpassword: null,
  });
  //main loggin parts
  const [logIn, setLogin] = useState(false);
  // visibilty of the passwords
  const [Password, setPassword] = useState(false);
  const [resetpassword, setConfirmPassword] = useState(false);
  const [ThemeChanger, setThemeChanger] = useState(false);

  //userClike to not change
  const ThemeMode = () => {
    setThemeChanger(!ThemeChanger);
      console.log("click")
  };
  //is this a  light or dark mode
  const isCheckerMode = ThemeChanger ? "dark" : "light";
  //set Attribute which directly goes to the html docs page
  useEffect(() => {
    document.documentElement.setAttribute("theme-css-mode", isCheckerMode);
  }, [ThemeChanger]);

  
  //onchange handeler apply here for getting the key and values pair from the form
  const FormHandler = (event) => {
    setLoginState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  // all states provider wrapper apply here
  const AllStatesProviderWrapper = {
    logIn,

    ThemeMode,
    isCheckerMode,
    setLogin,
    LoginState,
    FormHandler,
    Password,
    setPassword,
    setLogin,
    resetpassword,
    setConfirmPassword,
  };

  // return the provider here
  return (
    <StateManagerByContext.Provider value={AllStatesProviderWrapper}>
      {children}
    </StateManagerByContext.Provider>
  );
};

export default MainContextPage;

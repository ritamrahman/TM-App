import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const [theme, setTheme] = useState(null);

  // check system theme preferences
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // ThemeSwitch function;
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // after theme state value change run below code
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      {/* <div className="w-full pt-20 bg-white dark:bg-midnight"> */}
      <div className="bg-primary dark:bg-matBlack-900">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;

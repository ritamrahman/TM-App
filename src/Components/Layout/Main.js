import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Promotion from "../Error/Promotion";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const [theme, setTheme] = useState(null);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    loading && <Loading />;
  }, [loading]);

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
      {!loading && !user?.uid && (
        <Promotion msg="Without login you can add only one task" />
      )}
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      {/* <div className="w-full pt-20 bg-white dark:bg-midnight"> */}
      <div className="bg-primary dark:bg-matBlack-900">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

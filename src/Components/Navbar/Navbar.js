import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

export const Navbar = ({ handleThemeSwitch, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, loading, setLoading } = useContext(AuthContext);

  // handleLogOut
  const handleLogOut = () => {
    logOut()
      .then(() => {
        user?.uid && toast.success("Logout successful");
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-white dark:bg-matBlack-900 F z-10 w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* logo start */}
          <NavLink
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-matBlack-900 dark:text-primary uppercase text-gs ">
              TM App
            </span>
          </NavLink>
          {/* logo end */}
          {/* desktop menu start */}
          <ul className=" items-center hidden space-x-8 lg:flex">
            <button onClick={handleThemeSwitch}>
              {theme === "dark" ? (
                <span className="border bottom-1 rounded-md py-1 px-3 text-white">
                  Dark 🌙
                </span>
              ) : (
                <span className="border rounded-md py-1 px-3 text-black">
                  Light 🌞
                </span>
              )}
            </button>
            <li>
              <NavLink
                to="/add-task"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-matBlack-900 dark:text-primary transition-colors duration-200 hover:text-teal-accent-400 capitalize"
              >
                add task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-tasks"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-matBlack-900 dark:text-primary transition-colors duration-200 hover:text-teal-accent-400 capitalize"
              >
                My Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/completed-tasks"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-matBlack-900 dark:text-primary transition-colors duration-200 hover:text-teal-accent-400 capitalize"
              >
                Completed Tasks
              </NavLink>
            </li>

            <>
              {!loading && !user?.uid ? (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      aria-label="About us"
                      title="About us"
                      className="font-medium tracking-wide text-matBlack-900 dark:text-primary transition-colors duration-200 hover:text-teal-accent-400 "
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-purple-200 text-white dark:bg-yellowGreen text-primary dark:text-primary "
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      <NavLink to="/signup">Sign up</NavLink>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="cursor-pointer" onClick={handleLogOut}>
                    LogOut
                  </li>
                  {/* avatar */}
                  <li className="avatar tooltip tooltip-bottom">
                    <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 text-matBlack-900 dark:text-primary capitalize">
                      <img
                        src={
                          user?.photoURL
                            ? user.photoURL
                            : "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
                        }
                        alt=""
                      />
                    </div>
                  </li>
                </>
              )}
            </>
          </ul>
          {/* desktop menu end */}

          {/* mobile menu start */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center">
              <button onClick={handleThemeSwitch}>
                {theme === "dark" ? "🌙" : "🌞"}
              </button>

              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-primary dark:bg-matBlack-900 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gs  dark:text-primary uppercase">
                          TM App
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li className="avatar tooltip tooltip-bottom">
                        <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src={
                              user?.photoURL
                                ? user.photoURL
                                : "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
                            }
                            alt=""
                          />
                        </div>
                      </li>

                      <li>
                        <NavLink
                          to="/add-task"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-matBlack-900 dark:text-primary transition-colors duration-200 hover:text-teal-accent-400 capitalize"
                        >
                          add task
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/my-tasks"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-matBlack-900 dark:text-primary transition-colors duration-200 hover:text-teal-accent-400 capitalize"
                        >
                          My Task
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/completed-tasks"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-matBlack-900 dark:text-primary transition-colors duration-200 hover:text-teal-accent-400 capitalize"
                        >
                          Completed Tasks
                        </NavLink>
                      </li>

                      {!loading && !user?.uid ? (
                        <>
                          <li>
                            <NavLink
                              to="/login"
                              aria-label="About us"
                              title="About us"
                              className="font-medium tracking-wide text-matBlack-900 dark:text-primary transition-colors duration-200 hover:text-deep-purple-accent-400 capitalize"
                            >
                              login
                            </NavLink>
                          </li>
                          <li>
                            <button
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-200 dark:bg-yellowGreen dark:text-primary hover:bg-purple-400 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              <NavLink to="/signup">Sign Up</NavLink>
                            </button>
                          </li>
                        </>
                      ) : (
                        <li className="cursor-pointer">LogOut</li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          {/* mobile menu end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

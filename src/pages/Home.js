import React from "react";

const Home = () => {
  return (
    <div className="relative dark:bg-matBlack-900 py-10" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:bg-matBlack-900"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:bg-matBlack-900"></div>
      </div>
      <div className="relative pt-10 ml-auto">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-matBlack-900 dark:text-primary font-bold text-5xl md:text-6xl xl:text-7xl capitalize lg:leading-10">
            punctuality is the first key of{" "}
            <span className="text-purple-200 dark:text-yellowGreen uppercase pt-2">
              success.
            </span>
          </h1>

          {/* image field */}
          <div className="max-w-xl mx-auto mt-10 mb-6">
            <label className="flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 dark:border-yellowGreen border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600 dark:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600 dark:text-primary">
                  Drop files to Attach, or
                  <span className="text-blue-600 underline dark:text-primary">
                    browse
                  </span>
                </span>
              </span>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>

          {/* input */}
          <div className="relative mx-1 lg:mx-20">
            <label for="UserEmail" className="sr-only">
              {" "}
              Email{" "}
            </label>

            <input
              type="email"
              id="UserEmail"
              placeholder="chad@rhcp.com"
              className="w-full h-14 rounded-md border-gray-200 bg-offWhite dark:bg-primary px-10 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
            />

            <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
              <button
                type="button"
                className="rounded-full bg-purple-200 p-4 text-primary mr-4 text-white hover:bg-rose-700 dark:bg-yellowGreen dark:hover:bg-yellowGreen/75"
              >
                <span className="sr-only">Submit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
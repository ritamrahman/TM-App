import React from "react";
import Card from "../Components/Card/Card";

const AddTask = () => {
  return (
    <div className="py-10">
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
      <div className="relative mx-1 lg:mx-44">
        <label className="sr-only"> write your task </label>

        <input
          type="text"
          id="userText"
          placeholder="write your task"
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
  );
};

export default AddTask;

import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { api } from "../../api/api";

const Card = ({ id, title, image, isCompleted, deleteHandler }) => {
  return (
    <div
      className="relative block rounded-xl border border-yellowGreen p-8 shadow-xl"
      href=""
    >
      <div className=" flex justify-end">
        {isCompleted ? (
          <span className="rounded-full bg-purple-200 dark:bg-yellowGreen px-3 py-1.5 text-xs font-medium text-primary mx-2">
            Completed
          </span>
        ) : (
          <span className="rounded-full bg-redColor px-3 py-1.5 text-xs font-medium text-primary mx-2">
            Not Completed
          </span>
        )}
      </div>
      <div className="mt-4 text-gray-500 dark:text-primary sm:pr-8">
        <img
          src={`${image}?${image}:"https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"`}
          alt=""
          className="max-h-[100px] rounded-2xl"
        />

        <h3 className="mt-4 text-xl font-bold text-matBlack-900 dark:text-primary">
          {title}
        </h3>

        <p className="mt-2 hidden text-sm sm:block">
          You can manage phone, email and chat conversations all from a single
          mailbox.
        </p>
      </div>
      <div className=" flex justify-end">
        {/* complete */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-matBlack-900 dark:text-primary cursor-pointer mx-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        {/* edit */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-matBlack-900 dark:text-primary cursor-pointer mx-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        {/* delete */}
        <button onClick={() => deleteHandler(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-matBlack-900 dark:text-primary cursor-pointer mx-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;

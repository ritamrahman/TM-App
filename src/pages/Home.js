import React, { useContext, useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
import Error from "../Components/Error/Error";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [image, setImage] = useState("");
  const [userText, setUserText] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !loading && user && setIsLogin(true);
  }, [user]);

  console.log("isLogin", isLogin);

  console.log(user);

  // uploadImage
  const uploadImage = (e) => {
    setError(null);
    const i = e.target.files[0];
    setImage(i);
    console.log("image", i);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "h6imtxf3");
    data.append("cloud_name", "dhhybvtwz");

    fetch("  https://api.cloudinary.com/v1_1/dhhybvtwz/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data.url);

        data.url && toast.success("Image uploaded");
      })

      .catch((err) => console.log(err));
  };

  // uploadData
  const uploadData = async () => {
    console.log(userText, url);

    // let userTasks = [];

    const user = {
      _id: 1,
      title: userText,
      description: description,
      image: url,
      isCompleted: false,
    };

    // userTasks.push(user);

    localStorage.setItem("userData", JSON.stringify(user));
    toast.success("data uploaded");

    // clear filed
    setUserText("");
    setDescription("");
    setImage("");
    setUrl("");
    navigate("/my-tasks");
    // call post api
    !loading && user.email !== null && (await apiHandler());
  };

  setTimeout(function () {
    setError("Something wrong");
  }, "2000");

  // apiHandler
  const apiHandler = async () => {
    const formData = {
      title: userText,
      image: url,
      description: description,
    };
    console.log(formData);

    // save  information to the database
    // setIsLoading(true);
    fetch(`${api}/task/${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("data added successfully");
      });
  };

  return loading === true ? (
    <Loading />
  ) : (
    <>
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
                <input
                  type="file"
                  // onChange={(e) => setImage(e.target.files[0])}
                  onChange={uploadImage}
                  name="file_upload"
                  className="hidden"
                />
              </label>
            </div>
            {/* image preview */}
            {image !== "" && (
              <div className="text-start ">
                {!url && error !== null && (
                  <Error msg="something wrong please select another image"></Error>
                )}
                {!url || url === "" ? (
                  <span className="my-2 text-start bg-blackColor  text-primary py-2 px-3 rounded-lg ">
                    uploading
                  </span>
                ) : (
                  <span className=" bg-yellowGreen my-2  text-primary py-2 px-3 rounded-lg">
                    uploaded
                  </span>
                )}

                <img
                  className="max-w-[200px] my-3 rounded-3xl"
                  src={URL?.createObjectURL(image)}
                  alt=""
                />
              </div>
            )}

            {/* input */}
            <div className="relative mx-1 lg:mx-20">
              <label className="sr-only"> write your task </label>

              <input
                type="text"
                id="userText"
                name="userText"
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                placeholder="write your task"
                className="w-full h-14 rounded-md border-gray-200 bg-offWhite dark:bg-primary px-10 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
              />

              <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
                <button
                  type="button"
                  onClick={uploadData}
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
            <label class="text-gray-700" for="name">
              <textarea
                class="flex-1 w-full my-3 px-4 py-2 text-base text-primary placeholder-gray-400 bg-primary/5 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="description"
                placeholder="Description (100 words)"
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                rows="4"
                cols="10"
                maxlength="100"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

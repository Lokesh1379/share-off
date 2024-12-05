import React, { useState, useEffect } from "react";
import Svgs from "../sign-up/Svgs";
import { useDispatch } from "react-redux";
import { getUserWantTo } from "../../featers/global";

const loginFormData = {
  title: "Welcome back!",
  subtitle: "Login to access your Account.",
  fields: [
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Enter your username",
      className: "bg-transparent p-1  outline-none border-b-2 border-black",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      className: "bg-transparent p-1  outline-none border-b-2 border-black",
    },
  ],
};
const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loadingFunction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(false); // Return "false" after 3 seconds
      }, 4000);
    });
  };

  const fetchData = async () => {
    setIsLoading(true);

    const response = await loadingFunction();
    setIsLoading(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const setUerWantTo = () => {
    dispatch(getUserWantTo("signup"));
  };

  return (
    <div className=" p-10 rounded-lg place-items-center bg-transparent  border-2 border-black ">
      <div className="place-items-center ">
        <Svgs />
        <div className="grid palce-items-center mt-10 p-2">
          <span className="  text-center">{loginFormData.title}</span>
          <span className="">{loginFormData.subtitle}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mt-5">
          {loginFormData.fields.map((field, index) => (
            <div key={index} className="grid p-2">
              <label htmlFor={field.name} className="">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className={field.className}
                value={formData[field.name]}
                required
                onChange={handleChange}
              />
            </div>
          ))}
          <div className="mt-3 flex justify-center">
            <button
              class="bg-gradient-to-r w-11/12 from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center transition duration-300 transform hover:scale-105 border"
              onClick={fetchData}
            >
              {isLoading && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="animate-spin h-5 w-5 mr-3 text-white"
                >
                  <circle
                    stroke-width="4"
                    stroke="currentColor"
                    r="10"
                    cy="12"
                    cx="12"
                    class="opacity-25"
                  ></circle>
                  <path
                    d="M4 12a8 8 0 018-8v8H4z"
                    fill="currentColor"
                    class="opacity-75"
                  ></path>
                </svg>
              )}
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <div className="grid justify-center  mt-10">
            <span className="">
              I am human, I often{" "}
              <a href="#" className="text-sky-500">
                forgot password!
              </a>
            </span>
          </div>
        </div>
      </form>
      <div className="grid justify-center ">
        <span className="">
          Dont have account ?{" "}
          <button onClick={setUerWantTo} className="text-sky-500">
            create Account
          </button>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;

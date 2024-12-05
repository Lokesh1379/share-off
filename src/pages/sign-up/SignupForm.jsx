import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserWantTo } from "../../featers/global";
import Svgs from "./Svgs";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const formFields = [
    { name: "fullname", label: "Full Name", type: "text", required: true },
    { name: "username", label: "Username", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true },
  ];

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const setUserWantTo = () => {
    dispatch(getUserWantTo("login"));
  };
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="  px-10 py-5 rounded-lg place-items-center bg-transparent border-2 border-black  ">
      <div className=" place-items-center rounded">
        <Svgs />
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? Sign up now!
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="  ">
          <div className=" mt-5">
            {formFields.map((field) => (
              <div key={field.name} className="grid pt-4">
                <label htmlFor={field.name} className="">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  className="bg-transparent p-1 w-full  outline-none border-b-2 border-black"
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-center ">
            <button
              class="bg-gradient-to-r w-full from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center transition duration-300 transform hover:scale-105 border"
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
              {isLoading ? "Loading..." : "Singup"}
            </button>
          </div>
        </form>

        <div className="grid justify-center m-3">
          <span className="">
            Already have an account?{" "}
            <button onClick={setUserWantTo} className="text-sky-500">
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

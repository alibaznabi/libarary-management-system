import React, { useState } from "react";
import app from "../Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const StudentSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      navigate("/login");
    });
  };

  return (
    <div className="mt-[10rem]">
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden  top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full m-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center pt-4">
                Student Signup
              </h3>

            {/* Modal body */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-between">
                </div>
                <button
                  onClick={handleSignUp} 
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Signup
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  have an account?{" "}
                  <Link
                    to="/studentlogin"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Signin
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;

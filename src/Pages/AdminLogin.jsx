import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase";
import { useNavigate, Link } from "react-router-dom";

const auth = getAuth(app);

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/admindashboard");
        alert("Admin Login Successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-[10rem]">
      <form className="max-w-md mx-auto bg-gray-700 p-5 rounded">
        <h1 className="text-white text-2xl text-center py-4 pb-4 font-semibold">
          Admin login
        </h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={loginUser}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <div className="flex justify-around text-white pt-4">
          <p>Dont have an account</p>
          <Link to="/adminsignup">Create account</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;

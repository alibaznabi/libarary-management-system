import React from "react";
import images from '../assets/images/ielts.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Students from "./StudentLogin";




const Home = () => {

  
  return (
  <div className="">
    <div className=" text-center bg-gray-700 text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white py-7">
      <h1>LIBRARY-MANAGEMENT-SYSTEM</h1>
    </div>
    <div className="flex justify-around  items-center">
    <div className="">
      
      <Link to="studentlogin" className="bg-blue-500 w-60 h-10 flex item-center justify-center rounded-full  border-none outline-none text-3xl">
        STUDENT
        </Link>

        <br/> 
          
      <Link to="adminlogin" className="bg-blue-500 w-60 h-10 flex item-center justify-center rounded-full border-none outline-none text-3xl">ADMIN</Link>
    </div>
    <div className="w-50%">
    <img src={images} alt="" />
    </div>
    </div>
  </div>
  );
};

export default Home;

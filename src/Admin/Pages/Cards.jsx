import React from "react";
import { MdGroups2 } from "react-icons/md";
import { FaBookOpen ,FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Cards = ({ booksData, membersData }) => {
  return (
    <div className="w-[80%]">
      <h1 className="p-5 text-4xl font-bold">Dashboard</h1>
      <div className="flex">
        <div className="card1 shadow w-64 h-[20vh] rounded-md ml-5">
          <div className="flex p-3 gap-10 items-center justify-center">
            <MdGroups2 className="text-3xl text-red-500" />
            <div className="">
              <p className="text-3xl">Members</p>
              <p className="text-md">{membersData.length}</p>
            </div>
          </div>
          <Link to="/admindashboard/members" className="border-t px-2 text-xl pt-3 pl-3 flex items-center gap-5 text-purple-700 cursor-pointer">See all members <FaLongArrowAltRight /> </Link>
        </div>
        <div className="card1 shadow w-64 h-[20vh] rounded-md ml-5">
        <div className="flex p-3 gap-10 items-center justioo[|
          y-center">
            <FaBookOpen className="text-3xl text-purple-500" />
            <div className="">
              <p className="text-3xl">Books</p>
              <p className="text-md">{booksData.length}</p>
            </div>
          </div>
          <Link to="/admindashboard/books" className="border-t px-2 text-xl pt-3 pl-3 flex items-center gap-5 text-purple-700 cursor-pointer">See all Books <FaLongArrowAltRight /> </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;

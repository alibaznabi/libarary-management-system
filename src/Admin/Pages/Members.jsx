import React from "react";

const Members = () => {
  return (
    <div className=" w-[80%] mt-5">
      <div className="flex items-center gap-4 mb-5">
        <div className="text-3xl font-semibold ">Members</div>
        
      </div>
      <div className="relative overflow-x-auto  ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                stehpan
              </th>
              <td className="px-6 py-4">stephan@gmail.com</td>
              <td className="px-6 py-4">newzeland</td>
              <td className="px-6 py-4">+7890864534</td>
              <td className="px-6 py-4 text-red-500 cursor-pointer">Delete</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nizar
              </th>
              <td className="px-6 py-4">nizari@gmail.com</td>
              <td className="px-6 py-4">sjuhtk</td>
              <td className="px-6 py-4">+19998966</td>
              <td className="px-6 py-4 text-red-500 cursor-pointer">Delete</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                jhon
              </th>
              <td className="px-6 py-4">jhon@gmail.com</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">+234222399</td>
              <td className="px-6 py-4 text-red-500 cursor-pointer">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;

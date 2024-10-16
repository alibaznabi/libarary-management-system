import React, { useEffect, useState } from "react";
import { db } from "../Firebase";

import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { collection, getDocs, orderBy } from "firebase/firestore";

const AdminDashboard = () => {
  
  return (
    <div className="flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { db } from "../Firebase";

import Sidebar from "./Pages/Sidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  
  return (
    <div className="flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;

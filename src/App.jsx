import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import StudentSignup from "./Pages/StudentSignup";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StudentLogin from "./Pages/StudentLogin";
import AdminLogin from "./Pages/AdminLogin";
import AdminSignup from "./Pages/AdminSignup";
import UserDashboard from "./User/UserDashboard";
import AdminDashboard from "./Admin/AdminDashbaord";
import Members from "./Admin/Pages/Members";
import Books from "./Admin/Pages/Books";
import Cards from "./Admin/Pages/Cards";
import UserBooks from "./User/Pages/Books";
import IssuedBooks from "./User/Pages/IssuedBooks";

const App = () => {
  const [booksData, setBooksData] = useState([]);
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    async function firestoreData() {
      let tempMember = [];
      let tempBooks = [];

      try {
        const q1 = query(collection(db, "members"), orderBy("memId"));
        const querySnapshot1 = await getDocs(q1);
        querySnapshot1.forEach((doc) => {
          tempMember.push(doc.data());
        });

        const q2 = query(collection(db, "books"), orderBy("bookId"));
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          tempBooks.push(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
      setMembersData(tempMember);
      setBooksData(tempBooks);
    }
    firestoreData();
  }, []);
  return (
    <>
        <Routes>
          <Route path="/" exact element={<Home />} />

          {/* LOGIN SINGUP ROUTES */}

          <Route path="/studentlogin" exact element={<StudentLogin />} />
          <Route path="/studentsignup" exact element={<StudentSignup />} />
          <Route path="/adminlogin" exact element={<AdminLogin />} />
          <Route path="/adminsignup" exact element={<AdminSignup />} />

          {/* USER DAHSBOARD ROUTES */}

          <Route path="/userdashboard" exact element={<UserDashboard />}>
            <Route
              path="/userdashboard/"
              exact
              element={
                <UserBooks booksData={booksData} setBooksData={setBooksData} />
              }
            />
            <Route
              path="/userdashboard/issuedBooks"
              exact
              element={
                <IssuedBooks  />
              }
            />
          </Route>
          {/* ADMIN ROUTES */}
          <Route path="/admindashboard" exact element={<AdminDashboard />}>
            <Route
              path="/admindashboard/"
              exact
              element={
                <Cards booksData={booksData} membersData={membersData} />
              }
            />
            <Route path="/admindashboard/members" exact element={<Members />} />
            <Route
              path="/admindashboard/books"
              exact
              element={
                <Books booksData={booksData} setBooksData={setBooksData} />
              }
            />
          </Route>
        </Routes>
    </>
  );
};

export default App;

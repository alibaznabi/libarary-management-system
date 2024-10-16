import React, { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const Books = ({ booksData, setBooksData }) => {
  const [issuedBooks, setIssuedBooks] = useState([]);
  const navigate = useNavigate();

  const handleGetBook = async (index) => {
    const updatedBooksData = [...booksData];
    const selectedBook = updatedBooksData[index];

    if (!selectedBook.issued) {

      selectedBook.issued = true;
      setIssuedBooks((prevIssuedBooks) => [...prevIssuedBooks, selectedBook]);
      setBooksData(updatedBooksData);

      try {
        const issuedBooksCollection = collection(db, "issuedBooks");
        await addDoc(issuedBooksCollection, selectedBook);
        console.log('Book added to "issuedBooks" collection successfully!');
      } catch (error) {
        console.error('Error adding book to "issuedBooks" collection:', error);
      }

      navigate("/userdashboard/issuedBooks");
    }else{
      alert('This book is not available.');
    }
  };

  return (
    <>
      <div className=" w-[80%] mt-5">
        <div className="flex items-center gap-4 mb-5">
          <div className="text-3xl font-semibold ">Books</div>
        </div>
        <div className="relative overflow-x-auto  ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Book Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Get Book
                </th>
              </tr>
            </thead>
            <tbody>
              {booksData.map((book, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {book.bookId}
                  </th>
                  <td className="px-6 py-4">{book.title}</td>
                  <td className="px-6 py-4">{book.author}</td>
                  <td
                    className={
                      book.issued ? `text-red-500` : `text-green-500 px-6 py-4`
                    }
                  >
                    {book.issued ? "Not Avaliable" : "Available"}
                  </td>
                  <td
                    className={book.issued ? 'text-gray-500 px-6 cursor-pointer': `px-6 py-4 text-red-500 cursor-pointer`}
                    onClick={() => handleGetBook(index)}
                    disabled={book.issued}
                  >
                    Get Book
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Books;

import React, { useState } from "react";
import AddBook from "./AddBook";
import { deleteDoc, doc, collection } from "firebase/firestore";
import { db } from "../../Firebase";

const Books = ({ booksData, setBooksData }) => {
  const [addbook, setAddBook] = useState(false);

  const deleteHandler = async (index) => {
    const bookToDelete = booksData[index];

    const updatedData = [...booksData];
    updatedData.splice(index, 1);
    setBooksData(updatedData);

    // Remove from Firestore database
    try {
      const booksCollection = collection(db, "books");

      // Assuming there's an "id" field in each book object
      const bookDocRef = doc(booksCollection, bookToDelete.id);

      await deleteDoc(bookDocRef);
      console.log("Book deleted from Firestore successfully!");
    } catch (error) {
      console.error("Error deleting book from Firestore:", error);
    }
  };
  console.log("in book compo", booksData);

  const handleAddBook = () => {
    setAddBook(true);
  };
  const closeAddBook = () => {
    setAddBook(false);
  };

  return (
    <>
      <div className=" w-[80%] mt-5">
        <div className="flex items-center gap-4 mb-5">
          <div className="text-3xl font-semibold ">Books</div>
          <button
            className="text-xl px-4 py-2 bg-green-500 rounded-lg text-white"
            onClick={handleAddBook}                                                                                                         
          >
            Add New Book
          </button>
        </div>
        <div className="relative overflow-x-auto">
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
                  Action
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
                    {book.issued ? "Issued" : "Available"}
                  </td>
                  <td
                    className="px-6 py-4 text-red-500 cursor-pointer"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addbook && (
        <AddBook className="absolute top-0" closeAddBook={closeAddBook}/>
      )}
    </>
  );
};

export default Books;

import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../Firebase";

const IssuedBooks = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    const fetchIssuedBooks = async () => {
      try {
        const issuedBooksCollection = collection(db, 'issuedBooks');
        const issuedBooksSnapshot = await getDocs(issuedBooksCollection);

        const issuedBooksData = issuedBooksSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setIssuedBooks(issuedBooksData);
      } catch (error) {
        console.error('Error fetching issued books from Firestore:', error);
      }
    };

    fetchIssuedBooks();
  }, []); 

  const handleRemoveBook = async (id) => {
    try {
      const issuedBookDoc = doc(collection(db, 'issuedBooks'), id);
      await deleteDoc(issuedBookDoc);
      setIssuedBooks((prevIssuedBooks) => prevIssuedBooks.filter(book => book.id !== id));

      console.log(`Book with ID ${id} removed from issued books.`);
    } catch (error) {
      console.error('Error removing book from issued books:', error);
    }
  };


  return (
    <>
      <div className="w-[80%] mt-5">
        <h2 className="text-3xl font-semibold mb-3">Issued Books</h2>
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
                Return
              </th>
            </tr>
          </thead>
          <tbody>
            {issuedBooks.map((book) => (
              <tr key={book.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{book.bookId}</td>
                <td className="px-6 py-4">{book.title}</td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4 text-red-500 cursor-pointer" onClick={() => handleRemoveBook(book.id)}>
                  Return
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssuedBooks;

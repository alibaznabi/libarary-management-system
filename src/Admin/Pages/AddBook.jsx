import { addDoc, collection } from "firebase/firestore";
import React,{useState} from "react";
import { db } from "../../Firebase";

const AddBook = ({ closeAddBook }) => {
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [issued, setIssued] = useState(false);


  const handleRadioChange = (event) => {
    setIssued(event.target.checked);
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newBook = { bookId, title, author, issued }
      await addBookToFirestore(newBook);
      console.log("Book added successfully!");
      closeAddBook(true)
    } catch (error) {
      console.error("Error adding book to Firestore:", error);
    }
  };

  const addBookToFirestore = async (data) => {
    const collectionRef = collection(db, 'books'); 
    await addDoc(collectionRef, data);
  };


  return (
    <div className="h-screen w-full absolute   add-book">
      <div className="bg-white w-[35%] absolute z-40  top-[15%] left-[35%] h-[auto] py-10 rounded-md">
        <h2 className="text-center text-3xl mb-5">Add Book</h2>
        <form className="max-w-sm mx-auto flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              value={bookId}
              onChange={(e) => handleInputChange(e, setBookId)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="BookId"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              value={title}
              onChange={(e) => handleInputChange(e, setTitle)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title*"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              value={author}
              onChange={(e) => handleInputChange(e, setAuthor)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Author*"
              required
            />
          </div>
          {/* <div>
            <input
              type="checkbox"
              name="issued"
              checked={issued}
              onChange={handleRadioChange}
            />
            <label>Issued</label>
          </div> */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={closeAddBook}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

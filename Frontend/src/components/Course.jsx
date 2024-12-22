import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [bookData, setBookData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    title: '',
    bookCount:''
  });

  // Handle form input changes
  function handleFormChange(event) {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: name === "bookCount" ? parseInt(value, 10) || 0 : value,
    }));
  }

  // Function to get books
  const getBook = async () => {
    try {
      const res = await axios.get("http://localhost:8000/book");
      setBook(res.data); // Update book state with fetched data
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch books on page load
  useEffect(() => {
    getBook();
  }, []); // Empty dependency array ensures it runs only on initial load

  // Submit form and add new book
  async function handleBookDataSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/book", bookData);
      if (response.status === 201) {
        console.log(response.data);
        // Fetch the updated book list after successfully adding the new book
        getBook();
        
        // Clear the form fields by resetting the bookData state
        setBookData({
          name: '',
          price: '',
          category: '',
          image: '',
          title: '',
          bookCount: '',
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4 my-3 p-3">
        <div className="mt-28 items-center justify-center text-center">
          <div className="m-5 ">
            <h1 className="text-2xl md:text-4xl">
              Add New Book{" "}
              <span className="text-pink-500"> Here! :)</span>
            </h1>
          </div>
          <form onSubmit={handleBookDataSubmit} className="gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg shadow-lg ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 ">
              <input
                type="text"
                placeholder="Enter Book Name"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-gray-100 dark:bg-gray-800"
                name="name"
                value={bookData.name} // Bind the input to the state
                onChange={handleFormChange}
              />
              <input
                type="text"
                placeholder="Enter Price"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-gray-100 dark:bg-gray-800"
                name="price"
                value={bookData.price} // Bind the input to the state
                onChange={handleFormChange}
              />
              <input
                type="text"
                placeholder="Enter Category"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-gray-100 dark:bg-gray-800"
                name="category"
                value={bookData.category} // Bind the input to the state
                onChange={handleFormChange}
              />
              <input
                type="text"
                placeholder="Enter Image Url"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-gray-100 dark:bg-gray-800"
                name="image"
                value={bookData.image} // Bind the input to the state
                onChange={handleFormChange}
              />
              <input
                type="text"
                placeholder="Enter Title"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-gray-100 dark:bg-gray-800"
                name="title"
                value={bookData.title} // Bind the input to the state
                onChange={handleFormChange}
              />
              <input
                type="text"
                placeholder="Enter Book Count"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-gray-100 dark:bg-gray-800"
                name="bookCount"
                value={bookData.bookCount} // Bind the input to the state
                onChange={handleFormChange}
              />
            </div>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Save Book
            </button>
          </form>
          <div className="mt-5">
            <h1 className="text-2xl md:text-4xl">
              We're Absolutely Thrilled to Have You{" "}
              <span className="text-pink-500"> Here! :)</span>
            </h1>
          </div>
          <p className="mt-5 text-sm md:text-xl">
            Thank you for visiting! Dive into a world filled with endless possibilities where stories inspire,
            knowledge empowers, and imagination knows no bounds.
            <br /><br />
            Let’s make every moment worthwhile—because here, every page you turn opens a door to something extraordinary.
            Welcome aboard, and let your journey begin!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

import React, { useState } from "react";
import axios from "axios";

function Cards({ item, getBooks, setBooks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [bookData, setBookData] = useState({ ...item });

  // Handle form changes for the update
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle the update request
  async function handleUpdateBook(id) {
    try {
      console.log("Updating book with ID:", id);
      const response = await axios.put(`http://localhost:8000/book/${id}`, bookData);
      if (response.status === 200) {
        console.log("Book updated successfully:", response.data);
        // Immediately update local state with the new data
        setBookData(response.data);
        setIsEditing(false); // Exit editing mode
        console.log("Editing mode exited.");
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  }

  // Handle book deletion
  async function handleDeleteBook(id) {
    try {
      const response = await axios.delete(`http://localhost:8000/book/${id}`);
      if (response.status === 200) {
        console.log("Book deleted successfully:", response.data);

        // Immediately remove the deleted book from the local state
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={bookData.image} alt={bookData.name} />
        </figure>
        <div className="card-body">
          {isEditing ? (
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                value={bookData.name}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-md"
                placeholder="Name"
              />
              <input
                type="text"
                name="price"
                value={bookData.price}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-md"
                placeholder="Price"
              />
              <input
                type="text"
                name="category"
                value={bookData.category}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-md"
                placeholder="Category"
              />
              <input
                type="text"
                name="image"
                value={bookData.image}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-md"
                placeholder="Image URL"
              />
              <input
                type="text"
                name="title"
                value={bookData.title}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-md"
                placeholder="Title"
              />
              <button
                onClick={() => handleUpdateBook(item._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <h2 className="card-title">
                {bookData.name}
                <div className="badge badge-secondary">{bookData.category}</div>
              </h2>
              <p>{bookData.title}</p>
              <div className="card-actions justify-between">
                <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                  ${bookData.price}
                </div>
                <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-yellow-500 hover:text-white duration-200">
                  Buy Now
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteBook(item._id)}
                  className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-red-500 hover:text-white duration-200"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;

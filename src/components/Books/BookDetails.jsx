import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { addToStore } from "../../Utilites/AddToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);

  const {
    bookName,
    author,
    image,
    review,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
    tags,
    category,
  } = singleBook;

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleMarkAsRead = (id) => {
    addToStore(id);
  };

  return (
    <div>
      <button onClick={handleBackToHome} className="btn mt-10">
        Back
      </button>
      <div className=" mb-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-5 px-6 md:px-6 lg:px-0">
        <div className="bg-gray-200 p-10 rounded-2xl w-120 md:w-150 justify-items-center">
          <img src={image} alt="" className="w-[500px] h-[500px]" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="text-gray-400 my-2">By {author}</p>
          <hr className="text-gray-300 w-150" />
          <p className="text-gray-400 my-2">{category}</p>
          <hr className="text-gray-300 w-150" />
          <p className="text-gray-500 my-2 w-120 md:w-170 lg:w-170 text-justify">
            <span className="font-bold text-black">Review </span>
            {review}
          </p>
          <hr className="text-gray-300 w-150" />

          <div className="w-100">
            <div className="flex justify-between  mt-5">
              <p className="text-gray-500">Number of Pages</p>
              <p className="text-black font-bold">{totalPages}</p>
            </div>
            <div className="flex justify-between  mt-5">
              <p className="text-gray-500">Publisher</p>
              <p className="text-black font-bold">{publisher}</p>
            </div>
            <div className="flex justify-between  mt-5">
              <p className="text-gray-500">Year of Publishing</p>
              <p className="text-black font-bold">{yearOfPublishing}</p>
            </div>
            <div className="flex justify-between  mt-5">
              <p className="text-gray-500">Rating</p>
              <p className="text-black font-bold">{rating}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-10">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn btn-outline"
            >
              Mark as Read
            </button>
            <button className="btn bg-green-800 text-white border-0">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

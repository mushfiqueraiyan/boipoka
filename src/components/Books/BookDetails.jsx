import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

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

  return (
    <div>
      <button onClick={handleBackToHome} className="btn mt-10">
        Back
      </button>
      <div className="flex gap-10 mt-5">
        <div className="bg-gray-200 p-10 rounded-2xl">
          <img src={image} alt="" width={500} />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="text-gray-400 my-2">By {author}</p>
          <hr className="text-gray-300 w-150" />
          <p className="text-gray-400 my-2">{category}</p>
          <hr className="text-gray-300 w-150" />
          <p className="text-gray-500 my-2 w-170 text-justify">
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
            <button className="btn btn-outline">Mark as Read</button>
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

import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
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
  } = book;

  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className="border-1 border-gray-300 rounded-3xl flex flex-col gap-3 p-5 w-[400px]">
        <div className="bg-gray-100 p-3 flex justify-center rounded-3xl">
          <img src={image} alt="" className=" w-[150px] h-[200px]" />
        </div>
        <div className="flex gap-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-green-800 bg-green-50 p-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">{bookName}</h1>
          <p className="text-gray-500">By: {author}</p>
        </div>

        <div className="flex justify-between mt-5">
          <p className="text-gray-500">{category}</p>
          <div className="flex gap-2">
            <p className="text-gray-500">{rating}</p>
            <Star stroke="gold" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

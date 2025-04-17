import React from "react";
import Book from "./Book";

const Books = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-10  items-center">
      {books.map((book) => (
        <Book key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default Books;

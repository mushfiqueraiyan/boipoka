import React from "react";
import Banner from "./Banner";
import Books from "./Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const books = useLoaderData();
  //   console.log(books);

  return (
    <div>
      <Banner />
      <section className="max-w-[1200px] mx-auto px-0 md:px-10 lg:px-0 justify-items-center">
        <h1 className="text-center mt-10 text-4xl text-green-900 font-bold">
          Books
        </h1>
        <Books books={books} />
      </section>
    </div>
  );
};

export default Home;

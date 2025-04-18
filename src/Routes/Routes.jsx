import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Root from "../Root";
import About from "../components/About";
import BookDetails from "../components/Books/BookDetails";
import ReadList from "../components/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bookDetails/:id",
        loader: () =>
          fetch("/booksData.json").then((res) => {
            if (!res.ok) {
              throw new Error("Failed to load book data");
            }
            return res.json();
          }),
        element: <BookDetails />,
      },
      {
        path: "/readlist",
        loader: () => fetch("/booksData.json"),
        element: <ReadList />,
      },
    ],
  },
]);

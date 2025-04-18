import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utilites/AddToDB";
import { Book, HeartIcon, UsersRound } from "lucide-react";

const ReadList = () => {
  const data = useLoaderData();
  //   console.log(data);

  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBook);

    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  return (
    <div className="mt-5">
      <Tabs>
        <TabList>
          <Tab>
            <div className="flex">
              <Book /> Read List
            </div>
          </Tab>
          <Tab>
            <div className="flex">
              <HeartIcon /> Wish List
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mt-10">
            {readList.map((readedBook) => {
              return (
                <div
                  key={readedBook.bookId}
                  className="border-1 border-gray-200 p-4 rounded-2xl flex gap-3 mt-3 "
                >
                  <div className="bg-gray-200 rounded-2xl p-5">
                    <img src={readedBook.image} className="w-50 h-50" alt="" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-4xl">
                      {readedBook.bookName}
                    </h1>
                    <p className="font-semibold text-gray-500">
                      By: {readedBook.author}
                    </p>

                    <div className="flex gap-2 items-center">
                      <span className="font-bold">Tag </span>
                      {readedBook.tags.map((tag, i) => (
                        <div
                          key={i}
                          className="bg-green-100 text-green-500 flex p-2 rounded-3xl"
                        >
                          <p>#{tag}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <UsersRound />
                      <p className="text-gray-500">
                        Publisher: {readedBook.publisher}
                      </p>
                    </div>
                    <hr className="text-gray-300 w-110" />

                    <div className="flex gap-3">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-3xl">
                        Category: {readedBook.category}
                      </div>
                      <div className="bg-yellow-100 text-yellow-600 p-3 rounded-3xl">
                        Ratings: {readedBook.rating}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;

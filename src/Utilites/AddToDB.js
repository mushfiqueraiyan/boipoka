const getStoredBook = () => {
  const storedBookStr = localStorage.getItem("readList");

  if (storedBookStr) {
    const storedBookData = JSON.parse(storedBookStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStore = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    alert("This is already Exist");
  } else {
    storedBookData.push(id);
    const setData = JSON.stringify(storedBookData);
    localStorage.setItem("readList", setData);
  }
};

export { addToStore, getStoredBook };

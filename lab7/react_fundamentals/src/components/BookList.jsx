import {books} from "../data.js";
import Book from "./Book.jsx";
const BookList = () => {
  return (
    <>
      {books.map((item) => (
        <Book key={item.name} {...item} />
      ))}
    </>
  );
};

export default BookList;
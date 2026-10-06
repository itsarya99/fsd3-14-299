import Book from "./components/Book";
import Pen from "./components/pen";
import { books } from "./data/books";
import { pens } from "./data/pens";
import fruit from "./components/fruit";


export default function App() {
  return (
    <>
      <h1>Online Book Store </h1>
      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />
          
      </div>
    </>
  );
}

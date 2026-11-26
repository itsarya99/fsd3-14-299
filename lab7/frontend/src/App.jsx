import Book from "./components/Book";
import Pen from "./components/pen";
import { books } from "./data/books.js";
import { pens } from "./data/pens.js";
import Fruit from "./components/fruit.jsx";
import Event from "./components/Event.jsx";

const MyButton = () => {
  let count = 1;
  const handleSubmit = () => {
    console.log("Button clicked", count);
    count++;
  };
  return (
    <button
      className="bg-black text-white  text-xl rounded-md
      m-4 px-4 py-2"
      onClick={handleSubmit}
    >
      clicked {count} times
    </button>
  );
};
export default function App() {
  return (
    <>
      <MyButton />
    </>
  );
}




















//
function hello(){
  
}
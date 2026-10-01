const b1 = {
  picUrl:
    "https://m.media-amazon.com/images/I/41Vv6hJcxNL._SY445_SX342_QL70_FMwebp_.jpg",
  bname: "The Road to React",
  price: 2886,
  quantity: 10,
  rating: 5.0,
};
const b2 = {
  picUrl:
    "https://m.media-amazon.com/images/I/41JqamfsnJL._SX342_SY445_FMwebp_.jpg",
  bname: "Learn React with TypeScript",
  price: 3245,
  quantity: 10,
  rating: 4.4,
};

function Book(props) {
  const { bname, price, quantity, rating, picUrl } = props.book;

  return (
    <div className="book">
      <img src={picUrl} alt={bname} />
      <h3>Rating:{rating}</h3>
      <h1>Let us React </h1>
      <h3> Price:{price}</h3>
      <h4> Quanity:{quantity}</h4>
      <button>Buy Now</button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1>Online Book Store </h1>
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
      </div>
    </>
  );
}

const b1 = {
  picUrl:
    "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 2886,
  quantity: 10,
  rating: 5.0,
};
const b2 = {
  picUrl:
    "https://m.media-amazon.com/images/I/61NcBc--h7L._AC_UL480_FMwebp_QL65_.jpg",
  bname: "Learn React with TypeScript",
  price: 3245,
  quantity: 10,
  rating: 4.4,
};

function Book(props) {
  console.log(props);

  return (
    <div>
      <img src={props.book.picUrl} alt={props.book.bname} />
      <h3>Rating:{props.book.rating}</h3>
      <h1>Let us React </h1>
      <h3> Price:{props.book.price}</h3>
      <h4> Quanity:{props.book.quantity}</h4>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book book={b1} />
      <h1>Hello Arya </h1>
      <Book book ={b2} />
      <Book book={b1}/>
      <Book book ={b2}/>
    </>
  );
}

const b1= {
  picUrl:"https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"The Road to React",
  price:2886,
  quantity: 10,
  rating : 5.0,
};





function Book() {
  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg"
        alt="Road to React"
      />
      <h3>RATING: 4.5</h3>
      <h1>Let us React </h1>
      <h3> Price : 765.00</h3>
      <h4> Quantity: 5</h4>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book />
      <h1>Hello Arya </h1>
      <Book />
      <Book />
      <Book />
    </>
  );
}

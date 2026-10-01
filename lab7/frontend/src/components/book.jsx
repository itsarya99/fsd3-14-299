
export default function Book(props) {
  const { bname, price, quantity, rating, picUrl } = props.book;
  const qtyStyle = {
    fontSize: "1rem",
    color: "red",
    textAlign: "center",
    backgroundColor: "lightgray",
    padding: "5px",
  };

  return (
    <div className="book">
      <img src={picUrl} alt={bname} />
      <h3>Rating:{rating}</h3>
      <h1>Let us React </h1>
      <h3> Price:{price}</h3>
      <h4 style={qtyStyle}> Quanity:{quantity}</h4>
      <button>Buy Now</button>
    </div>
  );
}

import React from "react";
const products = [
  { title: "Cabbage", id: 1, isFruit: false },
  { title: "potato", id: 2, isFruit: false },
  { title: "Apple", id: 3, isFruit: true },
  { title: "Banana", id: 4, isFruit: true },
 


];
const ListItem = products.map((item) => <li key={item.id}>{item.title}</li>);
console.log(ListItem);

const fruit = () => {
  return <div>fruit</div>;
};

export default fruit;

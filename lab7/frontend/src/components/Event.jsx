import React from "react";

const MyButton = () => {
    const handleClick = () => {}
    alert("You clicked me!");
  return 
    <button
      style={{ hieght: "50px", width: "100px" }}
      onClick={handleClick}    >
      Click Me
    </button>;
  
};

const Event = () => {
  return <div>MyButton</div>;
};

export default Event;



const MyButton = () => {
    const handleClick = () => {
    alert("You clicked me!");
    }
  return( 
    <button class = "bg-black text-white rounded p-3 m-3" onClick={handleClick}>
      Click me!
    </button>
  )
  
};

const Event = () => {
  return <div><MyButton/>
  </div>
};

export default Event;

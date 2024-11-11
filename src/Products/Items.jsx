import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Items({ singleproducts }) {
  // State to control the visibility of the message
  const [toggle, setToggle] = useState(false);
  
  // State to keep track of the counter value
  const [count, setCount] = useState(0);

  // Toggles the visibility of the `<h4>` element
  const handleClick = () => {
    setToggle(!toggle);
  };

  // Increases the counter by 1
  const countInc = () => {
    setCount(prev => prev + 1);
  };

  // Decreases the counter by 1, if greater than 0
  const countDnc = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  // Resets the counter to 0
  const clear = () => {
    setCount(0);
  };

  return (
    <div className={`items ${toggle ? 'active' : ''}`}>
      {/* Display the product name */}
      <h1>{singleproducts}</h1>
      
      {/* Conditionally render the message */}
      {toggle && <h4>Welcome to my profile</h4>}
      
      {/* Buttons to toggle, increment, decrement, reset */}
      <Button onClick={handleClick}>Click</Button>

      {/* Display the counter with conditional styling */}
      <span className={count === 10 ? 'change' : 'black'}>{count}</span>

      <Button onClick={countInc}>Increase</Button>
      <Button onClick={countDnc}>Decrease</Button>
      <Button onClick={clear}>Clear</Button>
    </div>
  );
}

export default Items;

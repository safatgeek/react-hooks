import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((oldValue) => (oldValue + 1));
  };

  const handleDecrease = () => {
    setCount((oldValue) => (oldValue - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Counter;

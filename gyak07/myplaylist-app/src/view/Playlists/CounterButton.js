import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("count before", count);
    setCount(count + 1);
    setCount(count + 1);
    console.log("count after", count);
  };

  return <button onClick={handleClick}>{count}</button>;
};

export default CounterButton;

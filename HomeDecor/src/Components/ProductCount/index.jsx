import React, { useState } from "react";
import "./product-count.css";

const ProductCount = ({ onCountChange, countProduct }) => {
  let [count, setCount] = useState(countProduct);

  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="count flex">
      <button onClick={handleDecrease} className="count__item flex">
        -
      </button>
      <span className="number flex">{countProduct}</span>
      <button onClick={handleIncrease} className="count__item flex">
        +
      </button>
    </div>
  );
};

export default ProductCount;

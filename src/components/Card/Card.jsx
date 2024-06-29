import React from "react";

const Card = (cardNumber) => {
  console.log("card" + cardNumber);

  return (
    <div>
      <h4>{cardNumber}</h4>
    </div>
  );
};

export default Card;

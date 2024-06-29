import { memo } from "react";
import "./ShoppingCard.scss";

import { Link } from "react-router-dom";

const ShoppingCard = ({ title, description, className, id }) => {
  return (
    <Link to={`/shoppingItem/${id}`}>
      <li className={`shopping-card ${className}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </Link>
  );
};

export default memo(ShoppingCard);

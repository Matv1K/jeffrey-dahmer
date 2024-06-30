import { memo } from "react";
import "components/ShoppingCard/ShoppingCard.scss";

import { Link } from "react-router-dom";

const ShoppingCard = ({ title, description, className, id }) => {
  return (
    <Link to={`/shoppingItem/${id}`}>
      <li className={`shopping-card ${className}`}>
        <h3>{description}</h3>
        <p>{title}</p>
      </li>
    </Link>
  );
};

export default memo(ShoppingCard);

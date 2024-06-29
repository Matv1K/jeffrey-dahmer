import { useState } from "react";
import "./Shop.scss";

import { ShoppingCard } from "../../components";

const Shop = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Item 1", description: "lorem ipsum 1" },
    { id: 2, title: "Item 2", description: "lorem ipsum 2" },
    { id: 3, title: "Item 3", description: "lorem ipsum 3" },
  ]);

  return (
    <ul className="shopping-list">
      {items.map(({ title, description, id }) => {
        return (
          <ShoppingCard
            className="shopping-list__card"
            title={title}
            description={description}
            key={id}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default Shop;

import { useState, useEffect } from "react";
import "pages/Shop/Shop.scss";

import { ShoppingCard } from "components";

import { fetchItems } from "api";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetchItems();
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    getItems();
  }, []);

  return (
    <ul className="shopping-list">
      {items.map(({ title, description, _id }) => {
        return (
          <ShoppingCard
            className="shopping-list__card"
            title={title}
            description={`${description} + ${_id}`}
            key={_id}
            id={_id}
          />
        );
      })}
    </ul>
  );
};

export default Shop;

import { useParams } from "react-router-dom";

const ShoppingItemDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Item name: {id}</h2>
    </div>
  );
};

export default ShoppingItemDetails;

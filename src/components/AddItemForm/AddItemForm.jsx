import { useState } from "react";
import { postNewItem } from "api"; // Ensure this path is correct

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = { name, description };

    try {
      await postNewItem(newItem);
      console.log("Item added successfully");
      setDescription("");
      setName("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h4>Add Item to the Database</h4>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Name"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Description"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;

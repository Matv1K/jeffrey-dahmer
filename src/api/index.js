import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5000/api`,
});

export const postNewItem = async (itemData) => {
  try {
    const response = await api.post(`/items`, itemData);
    return response.data; // Assuming backend responds with the added item
  } catch (error) {
    throw error;
  }
};

export const fetchItems = () => api.get("/items");

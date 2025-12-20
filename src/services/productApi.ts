import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com"
});

/**
 * Fetch all products
 */
export const fetchAllProductsApi = async () => {
  const response = await api.get("/products");
  return response.data;
};

/**
 * Fetch all categories
 */
export const fetchCategoriesApi = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};

/**
 * Fetch products by category
 */
export const fetchProductsByCategoryApi = async (category: string) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
};

/**
 * Fetch single product by id
 * (Used in later phase)
 */
export const fetchProductByIdApi = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

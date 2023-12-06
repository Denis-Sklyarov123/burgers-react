import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL ?? "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});

export default class Api {
  static getByCategory = (selectedCategory) =>
    axiosInstance.get("/products/byCategory", {
      params: { selectedCategory },
    });
  static getFillingsByCategory = (category) =>
    axiosInstance.get("/fillings/byCategory", {
      params: { category },
    });
  static getMenu = () => axiosInstance.get("/menu");
  static getUser = (user) => axiosInstance.post("/user/create", user);
}

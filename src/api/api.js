import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default class Api {
  static getData = () => axiosInstance.get("/products/all");
  static getByCategory = (selectedCategory) =>
    axiosInstance.get("/products/byCategory", {
      params: { selectedCategory },
    });
  static getFillingsByCategory = (category) =>
    axiosInstance.get("/products/byCategoryModal", {
      params: { category },
    });
}

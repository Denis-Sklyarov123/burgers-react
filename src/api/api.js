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
  static getFillingsByCategory = (params) =>
    axiosInstance.get("/fillings/byCategory", { params });
  static getCategories = () => axiosInstance.get("/categories");
  static createUser = (user) => axiosInstance.post("/user/create", user);
  static login = (user) =>
    axiosInstance.post("/user/login", {
      emailOrUserName: user.login,
      password: user.password,
    });
}

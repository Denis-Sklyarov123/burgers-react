import data from "../data.json";

export default class Api {
  static async getData() {
    return data;
  }
}

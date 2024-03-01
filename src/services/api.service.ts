import axios, { AxiosInstance } from "axios";
import { Item } from "../types/Item";
import { User } from "../types/User";

export default class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({ baseURL: baseUrl });
  }

  async getItems(): Promise<Item[]> {
    const { data } = await this.axiosInstance.get<Item[]>(`items`);
    return data;
  }

  async getUsers(): Promise<User[]> {
    const { data } = await this.axiosInstance.get<User[]>(`users`);
    return data;
  }
}

import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

class ApiInstance {
  private axios: AxiosInstance;

  constructor() {
    //TODO add api prod url
    const baseURL =
      process.env.NODE_ENV === "production"
        ? "https://api.thinktg.bitbuilders.net"
        : "http://localhost:3033";

    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");

    this.axios = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    });
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.get(
        endpoint,
        options
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async patch<T>(
    endpoint: string,
    data: any,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.patch(
        endpoint,
        data,
        options
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const apiInstance = new ApiInstance();

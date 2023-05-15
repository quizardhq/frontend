import axios, { AxiosRequestConfig } from 'axios';

interface HttpServiceResponse<T> {
  data: T;
  status: number;
}

export interface APIResponse {
  success: boolean;
  message: string;
  data: any;
}

export class HttpService {
  private axiosInstance = axios.create();

  constructor(baseURL: string) {
    this.axiosInstance.defaults.baseURL = baseURL;
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<HttpServiceResponse<T>> {
    const response = await this.axiosInstance.get<T>(url, config);
    return {
      data: response.data,
      status: response.status,
    };
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<HttpServiceResponse<T>> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
    };
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<HttpServiceResponse<T>> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
    };
  }

  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<HttpServiceResponse<T>> {
    const response = await this.axiosInstance.patch<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
    };
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<HttpServiceResponse<T>> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return {
      data: response.data,
      status: response.status,
    };
  }
}

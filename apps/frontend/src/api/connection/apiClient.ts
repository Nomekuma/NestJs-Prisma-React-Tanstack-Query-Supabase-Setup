import axios, { type Method } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  return axiosInstance
    .request<T>({
      url: endpoint,
      method: (options.method as Method) || 'GET',
      data: options.body,
    })
    .then((response) => response.data);
}

export { fetchApi };

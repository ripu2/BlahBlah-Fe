import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useQuery, useMutation, UseQueryResult, UseMutationResult } from 'react-query';

// Define API response types
interface ApiResponse<T> {
  data: T;
  message?: string;
}

// Define Axios instance with default config
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOiIyMDI1LTAzLTEwVDE1OjQ4OjIwWiIsImV4cCI6MTc0MTcxMjMwMiwiZmlyc3RfbmFtZSI6IlBhbGFrIiwibGFzdF9uYW1lIjoiQmVhdXRpZnVsIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6IlBhbGFrIFBhdHRhIENoYXQifQ.x1vgy5OIc-nQ0O9rCFzmtj_YZp4ZGDO_8-Fu7j2SJCU`, // Temporary hardcoded token
  },
  withCredentials: true,
});

// Response Interceptor (Handle errors globally)
apiClient.interceptors.response.use(
  async (response: AxiosResponse) => response,
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error('Unauthorized! Redirecting to login.');
        // logoutUser(); // Implement logout function if needed
      }
    }
    return Promise.reject(error);
  }
);

// Generic API caller function
export const apiRequest = async <T>(
  method: AxiosRequestConfig['method'],
  url: string,
  data: unknown = {},
  params: Record<string, unknown> = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await apiClient({ method, url, data, params });
    return response.data.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// React Query Hooks
export const useFetchData = <T>(key: string, url: string, params: Record<string, unknown> = {}): UseQueryResult<T> => {
  return useQuery<T>(key, async () => {
    return await apiRequest<T>('GET', url, {}, params);
  });
};

export const useMutateData = <T, V>(method: AxiosRequestConfig['method'], url: string): UseMutationResult<T, unknown, V> => {
  return useMutation<T, unknown, V>(async (data: V) => {
    return await apiRequest<T>(method, url, data);
  });
};

export default apiClient;

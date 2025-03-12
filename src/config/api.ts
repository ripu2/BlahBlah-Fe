import { useMutation, useQuery, UseQueryResult, UseMutationOptions } from '@tanstack/react-query';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

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
    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOiIyMDI1LTAzLTEwVDE1OjQ4OjIwWiIsImV4cCI6MTc0MTc3MDM2MiwiZmlyc3RfbmFtZSI6IlBhbGFrIiwibGFzdF9uYW1lIjoiQmVhdXRpZnVsIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6IlBhbGFrIFBhdHRhIENoYXQifQ.MfPIueNdv4VuDBoK-LjyahtXNxixHcMHTHDWF4ZLnjE`, // Replace this with dynamic token handling
  },
  withCredentials: true,
});

// Response Interceptor (Handle errors globally)
apiClient.interceptors.response.use(
  async (response: AxiosResponse) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized! Redirecting to login.');
      // logoutUser(); // Implement logout function if needed
    }
    return Promise.reject(error);
  }
);

// Generic API caller function
export const apiRequest = async <T>(
  method: AxiosRequestConfig['method'],
  url: string,
  data?: unknown,
  params?: Record<string, unknown>
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
export const useFetchData = <T>(key: string, url: string, params?: Record<string, unknown>): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [key], // ✅ V4 requires queryKey as an array
    queryFn: async () => await apiRequest<T>('GET', url, {}, params),
  });
};

export const useMutateData = <T, V>(
  method: AxiosRequestConfig["method"],
  url: string,
  options?: UseMutationOptions<T, unknown, V>
) => {
  return useMutation<T, unknown, V>({
    mutationFn: async (data: V) => await apiRequest<T>(method, url, data),
    ...options, // ✅ Allow passing onSuccess from outside
  });
};

export default apiClient;

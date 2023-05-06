import axios, { AxiosInstance } from 'axios'

export const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
})

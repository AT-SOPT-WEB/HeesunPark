import axios from 'axios';
import { onErrorResponse } from '@api/error';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use((response) => response, onErrorResponse);

// src/services/authService.ts
import axios from 'axios';

interface UserResponse {
  email: string;
  name: string;
}

const API_URL = 'http://localhost:3000/api/auth/'; // Adjust the URL to your backend API

export const signUpUserService = async (email: string, name: string, password: string): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>(`${API_URL}signup`, { email, name, password });
  return response.data;
};

export const signInUserService = async (email: string, password: string): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>(`${API_URL}signin`, { email, password });
  return response.data;
};

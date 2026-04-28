import axios from 'axios';

// Configure base URL for production
// In development: proxy forwards /api to localhost:5000
// In production: use the Render backend URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://safetalk-project.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('safetalk-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
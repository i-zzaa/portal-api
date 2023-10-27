import axios from 'axios';

export const Auth = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_ORTS,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
};

export const API = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_ORTS,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
};

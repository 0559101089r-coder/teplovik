import axios from 'axios';

export const requester = axios.create({
  baseURL: 'https://teplovik.kg/api/v1/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

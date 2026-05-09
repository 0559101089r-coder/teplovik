import axios from 'axios';

export const requester = axios.create({
  baseURL: 'https://teplovikkg.com/api/v1/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

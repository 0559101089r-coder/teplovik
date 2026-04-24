import axios from 'axios';

export const requester = axios.create({
  baseURL: 'https://teplovikkg.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

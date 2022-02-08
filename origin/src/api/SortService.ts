import axios from 'axios';
import { Cart } from '../types/CartType';
export const baseUrl = 'http://localhost:8080/sort';

export const sort = (carts: Cart[]) => {
  return axios.post<Cart[]>(baseUrl, carts, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

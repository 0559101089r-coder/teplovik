import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useProducts = (params = {}) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => api.getProducts(params),
  });
};

export const useCategories = (params = {}) => {
  return useQuery({
    queryKey: ['categories', params],
    queryFn: () => api.getCategories(params),
  });
};

export const useProductById = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => api.getProductById(id),
    enabled: !!id,
  });
};

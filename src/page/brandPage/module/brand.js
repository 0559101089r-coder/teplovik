import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useBrands = (params = {}) => {
  return useQuery({
    queryKey: ['brands', params],
    queryFn: () => api.getBrands(params),
  });
};

export const useBrandById = (id) => {
  return useQuery({
    queryKey: ['brands', id],
    queryFn: () => api.getBrandById(id),
    enabled: !!id,
  });
};

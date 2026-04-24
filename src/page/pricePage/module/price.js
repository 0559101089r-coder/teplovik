import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const usePrices = (params = {}) => {
  return useQuery({
    queryKey: ['prices', params],
    queryFn: () => api.getPrices(params),
  });
};

export const usePriceById = (id) => {
  return useQuery({
    queryKey: ['prices', id],
    queryFn: () => api.getPriceById(id),
    enabled: !!id,
  });
};

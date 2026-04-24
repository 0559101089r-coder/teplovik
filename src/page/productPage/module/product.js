import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useProductById = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => api.getProductById(id),
    enabled: !!id,
  });
};

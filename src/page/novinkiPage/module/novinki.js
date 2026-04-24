import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useNovinki = (params = {}) => {
  // Usually novinki are just products ordered by newest
  const novinkiParams = { ...params, ordering: '-id' };
  return useQuery({
    queryKey: ['novinki', novinkiParams],
    queryFn: () => api.getProducts(novinkiParams),
  });
};

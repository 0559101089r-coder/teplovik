import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useSearchCatalog = (query) => {
  return useQuery({
    queryKey: ['search-catalog', query],
    queryFn: () => api.getProducts({ search: query }),
    enabled: !!query,
  });
};

export const useSearchNovinki = (query) => {
  return useQuery({
    queryKey: ['search-novinki', query],
    queryFn: () => api.getProducts({ search: query, ordering: '-id' }),
    enabled: !!query,
  });
};

export const useSearchPrices = (query) => {
  return useQuery({
    queryKey: ['search-prices', query],
    queryFn: () => api.getPrices({ search: query }),
    enabled: !!query,
  });
};

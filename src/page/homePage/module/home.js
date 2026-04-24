import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useBaseProducts = (params = {}) => {
  return useQuery({
    queryKey: ['base-products', params],
    queryFn: () => api.getBaseProducts(params),
  });
};

export const useBaseProductById = (id) => {
  return useQuery({
    queryKey: ['base-products', id],
    queryFn: () => api.getBaseProductById(id),
    enabled: !!id,
  });
};

export const useBaseModels = (params = {}) => {
  return useQuery({
    queryKey: ['base-models', params],
    queryFn: () => api.getBaseModels(params),
  });
};

export const useBaseModelById = (id) => {
  return useQuery({
    queryKey: ['base-models', id],
    queryFn: () => api.getBaseModelById(id),
    enabled: !!id,
  });
};

export const useBaseAbout = (params = {}) => {
  return useQuery({
    queryKey: ['base-about', params],
    queryFn: () => api.getBaseAbout(params),
  });
};

export const useBaseAboutById = (id) => {
  return useQuery({
    queryKey: ['base-about', id],
    queryFn: () => api.getBaseAboutById(id),
    enabled: !!id,
  });
};

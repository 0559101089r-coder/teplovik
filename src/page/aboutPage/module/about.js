import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useAboutData = (params = {}) => {
  return useQuery({
    queryKey: ['about-data', params],
    queryFn: () => api.getAboutData(params),
  });
};

export const useAboutDataById = (id) => {
  return useQuery({
    queryKey: ['about-data', id],
    queryFn: () => api.getAboutDataById(id),
    enabled: !!id,
  });
};

export const useAboutImages = (params = {}) => {
  return useQuery({
    queryKey: ['about-images', params],
    queryFn: () => api.getAboutImages(params),
  });
};

export const useAboutImageById = (id) => {
  return useQuery({
    queryKey: ['about-images', id],
    queryFn: () => api.getAboutImageById(id),
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

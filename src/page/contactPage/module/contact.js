import { useQuery } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useContacts = (params = {}) => {
  return useQuery({
    queryKey: ['contacts', params],
    queryFn: () => api.getContacts(params),
  });
};

export const useContactById = (id) => {
  return useQuery({
    queryKey: ['contacts', id],
    queryFn: () => api.getContactById(id),
    enabled: !!id,
  });
};

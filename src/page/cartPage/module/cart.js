import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../../../shared/constants';

export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => api.getCart(),
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api.addToCart(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId) => api.removeFromCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

import { useQuery, useMutation } from '@tanstack/react-query';
import { api } from './client';

export function useSection(section) {
  return useQuery({
    queryKey: ['section', section],
    queryFn: async () => {
      const { data } = await api.get(`/${section}`);
      return data;
    },
  });
}

export function useCallbackForm() {
  return useMutation({
    mutationFn: async (phone) => {
      const { data } = await api.post('/callback', { phone });
      return data;
    },
  });
}

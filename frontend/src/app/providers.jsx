import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '@/shared/lib/cart-context';

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60000, retry: 1 } } });

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
}

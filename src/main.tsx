import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { worker } from '@/mocks/browser.ts';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FavoritesContextProvider } from './store/favorites-context.tsx';

worker.start();
const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <FavoritesContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FavoritesContextProvider>
  </QueryClientProvider>
);

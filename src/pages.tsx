import { lazy } from 'react';
import Directory from './views/directory';

export const CryptoExchangeDetails = lazy(
  async () => await import('./views/cryptoExchangeDetails')
);
export const NoMatch = lazy(async () => await import('./views/404page'));
export { Directory };

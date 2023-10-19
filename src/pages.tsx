import Directory from './views/directory'
import { lazy } from 'react'

export { Directory }
export const CryptoExchangeDetails = lazy(
  async () => await import('./views/cryptoExchangeDetails')
)
export const NoMatch = lazy(async () => await import('./views/404page'))

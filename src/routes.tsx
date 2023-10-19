import { Directory, CryptoExchangeDetails, NoMatch } from './pages'
import { type Route } from './utils/types'

export const routes: Route[] = [
  {
    key: 'directory-route',
    title: 'Directory',
    path: '/',
    element: Directory
  },
  {
    key: 'details-route',
    title: 'CryptoExchangeDetails',
    path: '/exchanges/:id',
    element: CryptoExchangeDetails
  },
  {
    key: 'noMatch-route',
    title: '404page',
    path: '*',
    element: NoMatch
  }
]

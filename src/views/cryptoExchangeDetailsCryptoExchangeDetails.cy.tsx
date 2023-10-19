import React from 'react'
import CryptoExchangeDetails from './cryptoExchangeDetails'

describe('<CryptoExchangeDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CryptoExchangeDetails />)
  })
})
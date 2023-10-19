import React from 'react'
import Directory from './directory'

describe('<Directory />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Directory />)
  })
})
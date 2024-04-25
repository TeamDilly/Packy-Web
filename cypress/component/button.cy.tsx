import React from 'react'
import { mount } from 'cypress/react18'
import BoxButton from '@/components/ui/box-button'
import '@/app/globals.css'

describe('BoxButton Component', () => {
  it('renders correctly with default theme', () => {
    mount(
      <BoxButton buttonType='rect' theme='default' size='m'>
        Click me
      </BoxButton>,
    )
    cy.get('button').should('have.class', 'bg-purple-500')
    cy.get('button').should('have.class', 'text-white')
    cy.get('button').should('not.have.class', 'bg-gray-900') // Ensuring default theme is correctly applied
  })

  it('renders correctly with dark theme', () => {
    mount(
      <BoxButton buttonType='rect' theme='dark' size='m'>
        Click me
      </BoxButton>,
    )
    cy.get('button').should('have.class', 'bg-gray-900')
    cy.get('button').should('have.class', 'text-white')
  })

  it('renders correctly with light theme', () => {
    mount(
      <BoxButton buttonType='rect' theme='light' size='m'>
        Click me
      </BoxButton>,
    )
    cy.get('button').should('have.class', 'bg-gary-100')
    cy.get('button').should('have.class', 'text-black')
  })

  it('shows loading spinner when loading is true', () => {
    mount(
      <BoxButton buttonType='rect' loading={true} theme='default' size='m'>
        Click me
      </BoxButton>,
    )
    cy.get('[data-testid="progress-circle"]').should('not.have.class', 'hidden')
    cy.get('[data-testid="content"]').should('not.have.css', 'display', 'none')
  })

  it('does not show loading spinner when loading is false', () => {
    mount(
      <BoxButton buttonType='rect' loading={false} theme='default' size='m'>
        Click me
      </BoxButton>,
    )
    cy.get('[data-testid="progress-circle"]').should('have.class', 'hidden')
    cy.get('[data-testid="content"]').should('not.have.css', 'display', 'none')
  })
})

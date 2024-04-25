import React from 'react'
import { mount } from 'cypress/react18'
import BoxButton from '@/components/ui/box-button'
import '@/app/globals.css'

describe('BoxButton Component', () => {
  it('renders correctly with different sizes', () => {
    mount(
      <BoxButton buttonType='rect' size='l' theme='default'>
        Large Button
      </BoxButton>,
    )
    cy.get('button').should('contain', 'Large Button').and('have.class', 'py-[16px]')

    mount(
      <BoxButton buttonType='rect' size='m' theme='default'>
        Medium Button
      </BoxButton>,
    )
    cy.get('button').should('contain', 'Medium Button').and('have.class', 'py-[14px]')

    mount(
      <BoxButton buttonType='rect' size='s' theme='default'>
        Small Button
      </BoxButton>,
    )
    cy.get('button').should('contain', 'Small Button').and('have.class', 'py-[8px]')
  })

  it('applies theme colors correctly', () => {
    mount(
      <BoxButton buttonType='rect' size='m' theme='dark'>
        Dark Theme Button
      </BoxButton>,
    )
    cy.get('button').should('have.class', 'bg-gray-900')

    mount(
      <BoxButton buttonType='rect' size='m' theme='light'>
        Light Theme Button
      </BoxButton>,
    )
    cy.get('button').should('have.class', 'bg-gray-100')
  })

  it('handles the loading state correctly', () => {
    mount(
      <BoxButton buttonType='rect' size='m' theme='default' loading={true}>
        Loading
      </BoxButton>,
    )
    cy.get('button').within(() => {
      cy.get('[data-testid="progress-circle"]').should('not.have.class', 'hidden')
      cy.get('[data-testid="content"]').should('not.have.css', 'display', 'none')
    })
  })

  it('is disabled correctly', () => {
    mount(
      <BoxButton buttonType='rect' size='m' theme='default' disabled>
        Loading
      </BoxButton>,
    )
    cy.get('button').should('have.class', 'bg-purple-300')
    cy.get('button').should('have.attr', 'disabled')
  })

  it('changes appearance on active state', () => {
    mount(
      <BoxButton buttonType='rect' size='m' theme='default'>
        Active State
      </BoxButton>,
    )
    cy.get('button').click()
    cy.get('button').should('have.class', 'active:bg-purple-600')
  })
})

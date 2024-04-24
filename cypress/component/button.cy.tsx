// boxButton.cy.js
import React from 'react'
import BoxButton from '@/components/ui/box-button'
import { mount } from 'cypress/react18'

describe('BoxButton Component', () => {
  it('renders correctly with large size', () => {
    mount(<BoxButton size='l' buttonType='rect' text='Click me!' />)
    cy.get('button').should('have.class', 'py-[16px]')
    cy.get('button').should('have.class', 'px-[24px]')
    cy.get('button').should('have.class', 'rounded-[16px]')
    cy.get('button').should('have.class', 'bg-purple-500')
    cy.get('button').contains('Click me!')
  })

  it('renders correctly with medium size', () => {
    mount(<BoxButton size='m' buttonType='rect' text='Press here' />)
    cy.get('button').should('have.class', 'py-[14px]')
    cy.get('button').should('have.class', 'px-[24px]')
    cy.get('button').should('have.class', 'rounded-[8px]')
    cy.get('button').should('have.class', 'bg-purple-500')
    cy.get('button').contains('Press here')
  })

  it('renders correctly with small size', () => {
    mount(<BoxButton size='s' buttonType='round' text='Submit' />)
    cy.get('button').should('have.class', 'py-[8px]')
    cy.get('button').should('have.class', 'px-[24px]')
    cy.get('button').should('have.class', 'rounded-[8px]')
    cy.get('button').should('have.class', 'bg-purple-500')
    cy.get('button').contains('Submit')
  })

  it('triggers an event on click', () => {
    const onClick = cy.spy().as('clickSpy')
    mount(<BoxButton size='l' buttonType='rect' text='Click me!' onClick={onClick} />)
    cy.get('button').click()
    cy.get('@clickSpy').should('have.been.calledOnce')
  })
})

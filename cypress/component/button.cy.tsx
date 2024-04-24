import React from 'react'
import { mount } from 'cypress/react18'
import BoxButton from '@/components/ui/box-button'
import '@/app/globals.css'

describe('BoxButton', () => {
  it('renders correctly with different sizes', () => {
    const sizes = ['l', 'm', 's'] as const
    sizes.forEach(size => {
      mount(<BoxButton buttonType='rect' size={size} text='Click Me' theme='default' />)
      cy.get('button')
        .should('have.class', `py-[${size === 'l' ? '16px' : size === 'm' ? '14px' : '8px'}]`)
        .and('have.class', `px-[24px]`)
        .and('have.text', 'Click Me')
      cy.get('[data-testid="plus-icon"]').should('be.visible')
    })
  })

  it('applies the correct theme classes', () => {
    const themes = ['default', 'dark', 'light'] as const
    themes.forEach(theme => {
      mount(<BoxButton buttonType='rect' size='m' text='Click Me' theme={theme} />)
      cy.get('button')
        .should('have.class', `bg-${theme === 'default' ? 'purple-500' : theme === 'dark' ? 'gray-900' : 'gary-100'}`)
        .and('have.class', theme === 'light' ? 'text-black' : 'text-white')
    })
  })

  it('shows loading state correctly', () => {
    mount(<BoxButton buttonType='rect' size='m' text='Loading...' theme='default' loading={true} />)
    cy.get('[data-testid="progress-circle"]').should('not.have.class', 'hidden')
    cy.get('[data-testid="plus-icon"]').should('have.class', 'invisible')
    cy.get('p').should('have.class', 'invisible').and('contain', 'Loading...')
  })

  it('handles click events', () => {
    const onClick = cy.stub().as('onClick')
    mount(<BoxButton buttonType='rect' size='m' text='Click Me' theme='default' onClick={onClick} />)
    cy.get('button').click()
    cy.get('@onClick').should('have.been.calledOnce')
  })
})

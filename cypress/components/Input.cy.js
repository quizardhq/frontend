import React from 'react';
import { mount } from 'cypress/react18';
import Input from '../../components/ui/atoms/Input';

describe('Input Component', () => {
  it('renders an input element with the specified props', () => {
    mount(
      <Input
        type="text"
        value="Hello"
        placeholder="Enter your text"
        required={true}
        disabled={false}
        id="inputId"
        className="custom-class"
        autoComplete="off"
        name="inputName"
      />
    );

    cy.get('input[type="text"]').as('inputElement');

    cy.get('@inputElement')
      .should('have.attr', 'type', 'text')
      .should('have.attr', 'value', 'Hello')
      .should('have.attr', 'placeholder', 'Enter your text')
      .should('have.attr', 'required');
    cy.get('@inputElement')
      .should('have.attr', 'id', 'inputId')
      .should('have.class', 'custom-class')
      .should('have.attr', 'autocomplete', 'off')
      .should('have.attr', 'name', 'inputName');
  });

  it('renders a radio input element with the specified props', () => {
    mount(
      <Input
        type="radio"
        value="true"
        onChange={() => {}}
        required={false}
        disabled={false}
        id="radioId"
        className=""
        autoComplete=""
        name=""
      />
    );

    cy.get('input[type="radio"]').as('radioElement');

    cy.get('@radioElement')
      .should('have.attr', 'type', 'radio')
      .should('have.attr', 'value', 'true')
      .should('not.have.attr', 'required');
    cy.get('@radioElement')
      .should('not.be.disabled')
      .should('have.attr', 'id', 'radioId');
  });

  it('renders a checkbox input element with the specified props', () => {
    mount(
      <Input
        type="checkbox"
        value=""
        onChange={() => {}}
        required={false}
        disabled={false}
        id="checkboxId"
        className="custom-class"
        autoComplete=""
        name="checkboxName"
      />
    );

    cy.get('input[type="checkbox"]').as('checkboxElement');

    cy.get('@checkboxElement')
      .should('have.attr', 'type', 'checkbox')
      .should('have.attr', 'value', '')
      .should('not.have.attr', 'required');
    cy.get('@checkboxElement')
      .should('not.be.disabled')
      .should('have.attr', 'id', 'checkboxId')
      .should('have.class', 'custom-class')
      .should('have.attr', 'name', 'checkboxName');
  });
});

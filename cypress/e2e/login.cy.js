/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when Email is empty
 *   - should display alert when password is empty
 *   - should display alert when Email and password are wrong
 *   - should display homepage when Email and password are correct
 */
/* global cy, describe, it */

describe('Login spec', () => {
  it('should display login page correctly', () => {
    cy.visit('http://localhost:5173/');

    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Masuk$/)
      .should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.visit('http://localhost:5173/');

    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    cy.get('div[role="alert"]').should('be.visible');
  });

  it('should display alert when password is empty', () => {
    cy.visit('http://localhost:5173/');

    cy.get('input[placeholder="Email"]').type('dimas212@gmail.com');

    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    cy.get('div[role="alert"]').should('be.visible');
  });

  it('should display alert when username and password are wrong', () => {
    cy.visit('http://localhost:5173/');

    cy.get('input[placeholder="Email"]').type('dimas212@gmail.com');
    cy.get('input[placeholder="Password"]').type('bambang');

    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    cy.get('div[role="alert"]').should('be.visible');
  });

  it('should display homepage when Email and password are correct', () => {
    cy.visit('http://localhost:5173/');

    cy.get('input[placeholder="Email"]').type('dimas212@gmail.com');
    cy.get('input[placeholder="Password"]').type('dimas212');

    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('button')
      .contains(/^Logout$/)
      .should('be.visible');
  });
});

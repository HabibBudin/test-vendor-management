describe('template spec', () => {
  it('create user', () => {
  
        cy.visit('http://localhost:8000/users/create');
        cy.get('input[name="email"]').type('accountmanager@gmail.com');
        cy.get('input[name="password"]').type('password');
        cy.get('#remember').should('exist');
        cy.get('#remember').click();
        cy.get('#remember').should('be.checked');
        cy.get('.btn').click();
        cy.get('[for="2"]').click()
        cy.get('[name="name"]').type('Habib Budin')
  
  
  cy.get('[name="email"]').type('habibbudfinnn@gmail.com')
  cy.get('#phone_number').type('0812216440724')
  cy.get('#password').type('Habibbbudin')
  cy.get('.justify-end > .btn').click()
  cy.wait(15000);
  });
  
  it('edituser', () => {
      cy.visit('http://localhost:8000/user/2/edit')
      cy.get('input[name="email"]').type('accountmanager@gmail.com');
        cy.get('input[name="password"]').type('habibbudin');
        cy.get('#remember').should('exist');
        cy.get('#remember').click();
        cy.get('#remember').should('be.checked');
        cy.get('.btn').click();
  
        cy.get('#name').clear()
        .type('John D Oe')
        cy.get('#email').clear()
        .type('JohnDoe@gmail.com')
        cy.get('#password').type('habibbudin')
        cy.get('.justify-end > .btn').click()
        cy.wait(10000);
  
      })
      it('View Profile', () => {
        cy.visit('http://localhost:8000')
        cy.get('input[name="email"]').type('accountmanager@gmail.com');
          cy.get('input[name="password"]').type('habibbudin');
          cy.get('#remember').should('exist');
          cy.get('#remember').click();
          cy.get('#remember').should('be.checked');
          cy.get('.btn').click();
          cy.wait(10000);
  })
  })
  
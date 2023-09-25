describe('template spec', () => {
  it('createtenders', () => {
     cy.fixture('company_profile.pdf').then((fileContent) => {
       cy.fixture('sample.pdf').then((fileContent) => {

        // cy.fixture('spiderman.jpg').then((fileContent) => {
          // cy.fixture('Etika (2).pptx').then((fileContent) => {
    cy.visit('http://localhost:8000')
    cy.get('input[name="email"]').type('accountmanager@gmail.com');
    cy.get('input[name="password"]').type('password')
    cy.get('#remember').should('exist')
    cy.get('#remember').click()
    cy.get('#remember').should('be.checked')
    cy.get('.btn').click()

    cy.wait(2000)
    cy.get('.drawer-button').click()
    cy.get('.p-4 > nav > ul > :nth-child(4) > .flex').click()
    //Setelah pindah pada laman tenders

    
    cy.get('.hidden > .btn').click()//button CREATE TENDERS
    cy.wait(3000)
    cy.get('#project_id').select('skive projetcs')
    cy.get('#description').type('1234567890-QWERTYUIOPAsdfghjklzxcvbnm') //button 
    cy.get('#date_start').type('2023-08-19')//button 
    cy.get('#date_end').type('2026-09-19')//button 
    
    cy.get('#tor_doc').attachFile('company_profile.pdf')
    cy.get('#support_doc').attachFile('sample.pdf')
    
    cy.get('.btn').click()

              //negative case
    // cy.get('.hidden > .btn').click()//button CREATE TENDERS
    // cy.wait(3000)
    // cy.get('#project_id').select('skive projetcs')
    // cy.get('#description').type('1234567890-QWERTYUIOPAsdfghjklzxcvbnm') //button 
    // cy.get('#date_start').type('2023-08-19')//button 
    // cy.get('#date_end').type('2023-09-19')//button 
// 
    // cy.get('#tor_doc').attachFile('Spiderman.jpg')
    // cy.get('#support_doc').attachFile('Etika (2).pptx')
    // cy.get('.btn').click()

  })
})
})
})
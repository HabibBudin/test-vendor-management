describe('template spec', () => {
   it('createtenders', () => {
      cy.fixture('company_profile.pdf').then((fileContent) => {
        cy.fixture('sample.pdf').then((fileContent) => {
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
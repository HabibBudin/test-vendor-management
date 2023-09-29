describe('template spec', () => {
    //  it('passes', () => {
      // cy.visit('http://localhost:8000')
      // cy.get('input[name="email"]').type('accountmanager@gmail.com');
      // cy.get('input[name="password"]').type('password')
      // cy.get('#remember').should('exist')
      // cy.get('#remember').click()
      // cy.get('#remember').should('be.checked')
      // cy.get('.btn').click()
// 
      // cy.get('input[name="email"]').type('accountmanager@gmail.com');
      // cy.get('input[name="password"]').type('habibbudin');
      // cy.get('#remember').should('exist');
      // cy.get('#remember').click();
      // cy.get('#remember').should('be.checked');
      // cy.get('.btn').click();
      // cy.get('[for="2"]').click()
      // cy.get('[name="name"]').type('Habib Budin')
  // })
// })

it('membuat user baru', () => {
 cy.visit('http://localhost:8000')
 cy.get('input[name="email"]').type('accountmanager@gmail.com');
 cy.get('input[name="password"]').type('password')
 cy.get('#remember').should('exist')
 cy.get('#remember').click()
 cy.get('#remember').should('be.checked')
 cy.get('.btn').click()

 cy.wait(3000)

 cy.get('.btn.text-white.bg-purple.rounded-full.normal-case').eq(0).click({ force: true })//button create user
 cy.wait(5000)

 cy.get('[for="5"]').click()//button role
 cy.get('#name').type('bibha')
 cy.get('#phone_number').type('0123')
 cy.get('input[name="email"]').type('halqiq@gmail.com')
 cy.get('input[name="password"]').type('habibbudin')
 cy.get('.max-w-5xl > .mt-8').click()//button add user
 })
 //})

// it('membuat user baru negcase', () => {
  // cy.visit('http://localhost:8000')
  // cy.get('input[name="email"]').type('accountmanager@gmail.com');
  // cy.get('input[name="password"]').type('password')
  // cy.get('#remember').should('exist')
  // cy.get('#remember').click()
  // cy.get('#remember').should('be.checked')
  // cy.get('.btn').click()

  // cy.wait(3000)

  // cy.get('.btn.text-white.bg-purple.rounded-full.normal-case').eq(0).click({ force: true })//button create user
  // cy.wait(5000)

  // cy.get('[for="3"]').click()//button role
  // cy.get('#name').type('bibha1223')
  // cy.get('#phone_number').type('012a3')
  // cy.get('input[name="email"]').type('srq@.com') 
  // cy.get('input[name="password"]').type('a')
  // cy.get('.max-w-5xl > .mt-8').click()//button add user
  // })
  // })
// 

})
// 
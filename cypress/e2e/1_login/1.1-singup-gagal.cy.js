describe('template spec', () => {
   it('passes', () => {
      cy.visit('http://localhost:8000')
      cy.wait(2000)
 


   //signupgagal 

                  cy.wait(2000)

            cy.contains('Sign up').click()//hyperlink masuk ke laman signup
            cy.get('#name').type('a') //signup tahap 1                  
            cy.get('#email').type('habibudinn@.com')
            cy.get('#phone_number').type('09876dna')
            cy.get('#password').type('de')
            cy.get('#nextBtn1').click()

            //sign up tahap 2
            cy.get('#company_name').type('Skive')
            cy.get('#address').type(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Ac ut consequat semper viverra nam libero justo laoreet sit. Orci sagittis eu volutpat odio facilisis mauris. Sed cras ornare arcu dui vivamus arcu felis bibendum. Suscipit adipiscing bibendum est ultricies. Est sit amet facilisis magna. Odio morbi quis commodo odio aenean. Amet nisl suscipit adipiscing bibendum est ultricies. Nibh mauris cursus mattis molestie. Vestibulum morbi blandit cursus risus at ultrices mi tempus.

            Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Enim nulla aliquet porttitor lacus luctus. Vitae nunc sed`)
            cy.get('#website').type('skive.com')
            cy.get('#company_email').type('skive@.com')
            cy.get('#bank_reference').type('webg')
            cy.get('#nextBtn2').click()

            cy.get('#submit').click()


       })
      })
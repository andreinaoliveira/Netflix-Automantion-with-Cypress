import pageLogin from '../pages/Login'

Cypress.Commands.add('login', (user) => {
    cy.step('Checking session')
    
    cy.session([user], () => {
        cy.getCookie('NetflixId').then((cookie) => {
            if (cookie) {
                return;
            }
            pageLogin.go()
            pageLogin.fillForm(user)
            pageLogin.submit()
        })
    },
    {
        validate() {
            cy.visit('/Browse')
            cy.url().should('not.equal', 'https://www.netflix.com/login')
            cy.step('Logged in')
        },
        cacheAcrossSpecs: true,
    })
})

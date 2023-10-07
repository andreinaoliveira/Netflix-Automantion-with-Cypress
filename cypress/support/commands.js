import pageLogin from '../pages/Login'
Cypress.Commands.add('login', (user) => {
    cy.session([user], () => {
        pageLogin.go()
        pageLogin.fillForm(user)
        pageLogin.submit()
    },
        {
            cacheAcrossSpecs: true
        })
    cy.visit('/browse')
})

class Login {
    go() {
        cy.visit('/login')
    }
    check() {
        cy.url().should('be.equal', 'https://www.netflix.com/br/login')
        cy.get('div h1').should('have.text', 'Entrar')
    }

    fillForm(user) {
        cy.get('#id_userLoginId').click({ force: true }).type(user.email)
        cy.get('#id_password').type(user.password, { log: false })
    }

    submit(){
        cy.get('button[type="submit"]').click()
    }

    expectedMessage(message) {
        cy.get('div .ui-message-contents a').should('have.text', message)
    }
}
export default new Login;
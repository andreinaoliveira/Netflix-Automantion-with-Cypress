const ref = {
    url: '/login',
    title: 'div h1',
    fldUserId: '#id_userLoginId',
    fldUserPassword: '#id_password',
    btnLogin: 'button[type="submit"]',
    alert: 'div .ui-message-contents a'
}

const exp = {
    url: 'https://www.netflix.com/br/login',
    title: 'Entrar'
}

class Login {
    go() {
        cy.visit(ref.url)
        cy.url().should('be.equal', exp.url)
        cy.get(ref.title).should('have.text', exp.title)
    }

    fillForm(user) {
        cy.get(ref.fldUserId).click({ force: true }).type(user.id)
        cy.get(ref.fldUserPassword).type(user.password, { log: false })
    }

    submit() {
        cy.get(ref.btnLogin).click()
    }

    expectedMessage(message) {
        cy.get(ref.alert).should('have.text', message)
    }
}
export default new Login;
class Browse {
    go() {
        crypto.visit('/browse')
    }
    check() {
        cy.url().should('be.equal', 'https://www.netflix.com/browse')
        cy.get('div h1').should('have.text', 'Quem está assistindo?')
    }
}

export default new Browse;
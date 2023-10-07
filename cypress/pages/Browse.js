const ref = {
    url: '/browse',
    title: 'div h1'
}
const exp = {
    url: 'https://www.netflix.com/browse',
    title: 'Quem está assistindo?'
}

class Browse {
    go() {
        cy.visit(ref.url)
        cy.url().should('be.equal', exp.url)
        cy.get(ref.title).should('have.text', exp.title)
    }
}

export default new Browse;
const ref = {
    url: '/',
    title: "div h1",
    btnLogin: 'a[href$="/login"]'
}
const exp = {
    url: "https://www.netflix.com/br/",
    title: 'Risadas, lágrimas e muitas emoções.\nEncontre tudo na Netflix.'
}

class Home {
    go() {
        cy.visit(ref.url)
        cy.url().should('be.equal', exp.url)
        cy.get(ref.title).should('have.text', exp.title)
    }

    goLogin() {
        cy.get(ref.btnLogin).click({ force: true })
    }
}
export default new Home;
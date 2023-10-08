const ref = {
    url: '/browse',
    title: 'div h1',
    profile: '.profile-name'
}
const exp = {
    url: 'https://www.netflix.com/browse',
    title: 'Quem está assistindo?',
}

class Browse {
    go() {
        cy.visit(ref.url)
        cy.url().should('be.equal', exp.url)
        cy.get(ref.title).should('have.text', exp.title)
    }

    chooseProfile(user) {
        cy.get(ref.profile).contains(user.name)
        .should('be.visible')
        .click()
    }
}

export default new Browse;
class Home{
    go(){
        cy.visit('/')
    }
    check(){
        cy.url().should('be.equal', 'https://www.netflix.com/br/')
        cy.get('.hero-card .our-story-card-text h1').should('have.text',
            'Filmes, séries e muito mais.\nSem limites. ')
    }

    goLogin(){
        cy.get('a[href="/login"]').click()
    }
}
export default new Home;
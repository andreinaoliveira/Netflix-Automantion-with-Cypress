import login from '../pages/Login'

describe('Go and Check Login page', () => {
    beforeEach(() => {
        login.go()
    })

    const dataUser = [
        {
            type: 'invalid password',
            user: {id: 'teste@gmail.com', password: 'teste123'},
            msg: 'redefina sua senha.'
        },

        /* BUG NETFLIX
        {
            type: 'invalid account',
            user: {id: 'testecypress-andreina@gmail.com', password: 'teste123'},
            msg: 'crie um nova conta'
        },
        */

        {
            type: 'valid account',
            user: {id: Cypress.env('userValid').id, password: Cypress.env('userValid').password},
            msg: null
        }
    ]

    dataUser.forEach(({ type, user, msg }) => {
        it(`User with ${type}`, () => {
            login.fillForm(user)
            login.submit()
            msg === null
                ? cy.url().should('not.contain', '/login')
                : login.expectedMessage(msg)

        })
    })
})

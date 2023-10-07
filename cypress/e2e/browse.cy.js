import browse from '../pages/Browse'

const user = Cypress.env('userValid')

describe('Go and Check browse page', () => {
    beforeEach(() => {
        cy.login(user)
        browse.go()
    })

    it(`Choose a profile`, () => {
        browse.chooseProfile(user)

    })
})

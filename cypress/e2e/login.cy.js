import login from '../pages/Login'
import browse from '../pages/Browse'
import loginFactory from '../factories/LoginFactory'

describe('Go and Check Login page', () => {
    beforeEach(() => {
        login.go()
    })

    it('Access Netflix login page', () => {
        login.check()
    })

    it('User with invalid password', () => {
        var user = loginFactory.userInvalidPassword()
        login.fillForm(user)
        login.submit()
        login.expectedMessage('redefina sua senha.')
    })

    it('User with invalid account', () => {
        var user = loginFactory.userInvalidAccount()
        login.fillForm(user)
        login.submit()
        login.expectedMessage('crie um nova conta')
    })


    it('User with valid account', () => {
        login.fillForm(Cypress.env('userValid'))
        login.submit()
        browse.check()
    })
})

import login from '../pages/Login'
import browse from '../pages/Browse'
import loginFactory from '../factories/LoginFactory'

describe('Go and Check Login page', () => {
    it('Access Netflix login page', () => {
        login.go()
        login.check()
    })

    it('User with invalid password', () => {
        var user = loginFactory.userInvalidPassword()
        login.go()
        login.fillForm(user)
        login.submit()
        login.expectedMessage('redefina sua senha.')
    })

    it('User with invalid account', () => {
        var user = loginFactory.userInvalidAccount()
        login.go()
        login.fillForm(user)
        login.submit()
        login.expectedMessage('crie um nova conta')
    })


    it('User with valid account', () => {
        login.go()
        login.fillForm(Cypress.env('userValid'))
        login.submit()
        browse.check()
    })
})

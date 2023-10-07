import home from '../pages/Home'
describe('Home page', () => {
    beforeEach(() => {
        home.go()
    })


    it('Click in Login to go to Login page', () => {
        home.go()
        home.goLogin()
    })
})

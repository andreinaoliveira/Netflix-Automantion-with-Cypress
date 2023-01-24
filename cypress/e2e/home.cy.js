import home from '../pages/Home'
import login from '../pages/Login'
describe('Home page', () => {
    beforeEach(() => {
        home.go()
    })
    
    it('Access Netflix home page', () =>{
        home.check()
    })

    it('Click in Login to go to Login page', () => {
        home.goLogin()
        login.check()
    })
})

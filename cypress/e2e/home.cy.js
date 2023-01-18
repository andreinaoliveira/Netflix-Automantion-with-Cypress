import home from '../pages/Home'
import login from '../pages/Login'
describe('Home page', () => {
    it('Access Netflix home page', () =>{
        home.go()
        home.check()
    })

    it('Click in Login to go to Login page', () => {
        home.go()
        home.goLogin()
        login.check()
    })
})

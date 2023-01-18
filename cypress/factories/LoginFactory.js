export default {
    userInvalidPassword: function () {
        var data = {
            email: 'teste@gmail.com',
            password: 'teste123'
        }
        return data
    },

    userInvalidAccount: function () {
        var data = {
            email: 'testecypress@gmail.com',
            password: 'teste123'
        }
        return data
    }
}
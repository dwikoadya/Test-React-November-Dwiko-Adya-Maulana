import Cookies from 'js-cookie'

function logIn(token) {
    Cookies.set('token', token)
}

function getToken() {
     return Cookies.get('token')
}

export default {
    logIn,
    getToken,
}
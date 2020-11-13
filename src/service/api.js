import Axios from 'axios'
import user from './user'

const domain = '18.139.50.74'
const port = 8080

const config = {
    baseURL: `http://${domain}:${port}`
}

const api = Axios.create(config)

export function registerUser(params) {
    return api.post('/register', params)
}

export function loginUser(params) {
    return api.post('/login', params)
    .then((response) => {
        const { data } = response
        user.logIn(data.data.token)
        return true
    }, () => (false)
    )
}

export function createList(params) {
    return api.post('/checklist', params, {
        headers: {
            Authorization: `Bearer ${user.getToken()}`
        }
    })
}

export function getList() {
    return api.get('/checklist', {
        headers: {
            Authorization: `Bearer ${user.getToken()}`
        }
    })
}

export function deleteList(listId) {
    return api.delete(`/checklist/${listId}`, {
        headers: {
            Authorization: `Bearer ${user.getToken()}`
        }
    })
}

export function getById(listId) {
    console.log(listId)
    return api.get(`/checklist/${listId}`, {
        headers: {
            Authorization: `Bearer ${user.getToken()}`
        }
    })
}

export function createItem(listId, params) {
    console.log(params)
    return api.post(`/checklist/${listId}/item`, params , {
        headers: {
            Authorization: `Bearer ${user.getToken()}`
        }
    })
}

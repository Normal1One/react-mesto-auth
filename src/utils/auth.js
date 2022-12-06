export const BASE_URL = 'https://auth.nomoreparties.co'

export const register = ({ email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then(_checkResponse)
}

export const authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email }),
    })
        .then(_checkResponse)
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token)
                return data
            }
        })
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then(_checkResponse)
}

function _checkResponse(response) {
    if (response.ok) {
        return response.json()
    }
    return Promise.reject(`Ошибка: ${response.status}`)
}

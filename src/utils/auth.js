export const BASE_URL = 'https://auth.nomoreparties.co'

export const register = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    return _checkResponse(response)
}

export const authorize = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email }),
    })
    const data = await _checkResponse(response)
    if (data.token) {
        localStorage.setItem('token', data.token)
        return data
    }
}

export const checkToken = async (token) => {
    const response = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    return _checkResponse(response)
}

function _checkResponse(response) {
    if (response.ok) {
        return response.json()
    }
    return Promise.reject(`Ошибка: ${response.status}`)
}

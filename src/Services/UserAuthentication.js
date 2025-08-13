import { AUTHENTICATION_URI, SIGNIN_URI, URL } from "../Utils/ApiUrl"

export const signIn = async (formData) => {
    const response = await fetch(`${URL}${AUTHENTICATION_URI}${SIGNIN_URI}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    return response
}

export const signUp = async (formData) => {
    const response = await fetch(`${URL}${AUTHENTICATION_URI}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    return response
}


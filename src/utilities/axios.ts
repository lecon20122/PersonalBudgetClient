import axios from 'axios'
import { getSession, signOut, useSession } from 'next-auth/react';

export const getAuthHeader = async () => {
    let session = await getSession()
    if (session?.accessToken) {
        return session.accessToken
    }
    return null
}

getAuthHeader().then((token) => {
    if (token) {
        http.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }
}).catch((err) => console.log(err))


export const http = axios.create({

    baseURL: process.env.BACKEND_URL ?? 'http://localhost:5156',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

http.interceptors.response.use(
    (response) => {
        // if 401, signout and redirect to '/'
        if (response.status === 401) {
            signOut()
        }
        return response
    }
)
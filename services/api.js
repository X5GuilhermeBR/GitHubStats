import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENDPOINT_BASE,
})

export const searchUsersGithub = async (username) => {
    return api.get(`/search/users?q=${username}`)
}

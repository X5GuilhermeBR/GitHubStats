import axios from 'axios'

export const USERS = 'Users'

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENDPOINT_BASE,
})

export const searchUsersGithub = async (username) => {
    return await api.get(`/search/users?q=${username}&type=Users&per_page=100`)
}

export const getUserInformations = async (username) => {
    return await api.get(`/users/${username}`)
}

export const getUserStars = async (username) => {
    return await api.get(`/users/${username}/starred?per_page=100`)
}

export const setLocalStorageUsersItems = async (items) => {
    return localStorage.setItem(USERS, JSON.stringify(items))
}

export const getLocalStorageUsersItems = async () => {
    return await JSON.parse(localStorage.getItem(USERS))
}
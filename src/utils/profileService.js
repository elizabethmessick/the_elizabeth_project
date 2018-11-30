import tokenService from './tokenService';


function getUser() {
    return tokenService.getUserFromToken();
}

function getUserById(id) {
    return fetch(`/api/users/${id}`)
        .then(res => res.json())
}

function create(profile, userId) {
    return fetch('/api/profiles', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ profile, userId })
    })
}

function getAllProfiles() {
    return fetch('/api/profiles/all')
        .then(res => res.json())
}

function deleteProfile(userId) {
    return fetch('/api/profiles/delete', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ userId })
    })
        .then(res => res.json())
}


export default {
    create,
    getUser,
    getUserById,
    getAllProfiles,
    deleteProfile
}


import tokenService from './tokenService';


function getUser() {
    return tokenService.getUserFromToken();
}

function getProfile() {
    return fetch(`/api/users/profile`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + tokenService.getToken()
        })
    })
        .then(res => res.json())
}

function create(profile) {
    return fetch('/api/profiles', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify({ profile })
    })
}

function getAllProfiles() {
    return fetch('/api/profiles/all')
        .then(res => res.json())
}


export default {
    create,
    getUser,
    getProfile,
    getAllProfiles
}


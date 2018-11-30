import tokenService from './tokenService';


function getUser() {
    return tokenService.getUserFromToken();
}

function getUser1(id) {
    return fetch(`/api/users/${id}`)
}

function create(profile, userId) {
    console.log(profile);
    return fetch('/api/profiles', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(Object.assign(profile, { userId }))
    })
}


export default {
    create,
    getUser,
    getUser1
}


import tokenService from './tokenService';


function getUser() {
    return tokenService.getUserFromToken();
}

function create(profile, userId) {
    console.log(profile);
    return fetch('/api/profiles', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(Object.assign(profile, { userId }))
    })
    //     .then(res => res.json())
    //     .then(profile => {
    //         this.setState({ profile });
    //     });
}


export default {
    create,
    getUser
}


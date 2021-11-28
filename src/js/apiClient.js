const url = 'http://localhost:5000';

async function login(email, password) {

    const response = await fetch(`${url}/users/signin`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });


    return response.json();
}

async function signup(email, password) {

    const response = await fetch(`${url}/users/signup`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}
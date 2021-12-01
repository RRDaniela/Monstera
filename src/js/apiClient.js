const url = 'http://localhost:5000';

async function login(email, password) {

    const response = await fetch(`${url}/users/signin`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(response);
    }


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

async function createProduct(product) {

    const response = await fetch(`${url}/products`, {
        method: 'POST',
        body: JSON.stringify({...product }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error(`HTTP ERROR [CODE]: ${response.status}`);
    }

    return response.json();
}

async function getProducts() {

    const response = await fetch(`${url}/products`, {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error(`HTTP ERROR [CODE]: ${response.status}`);
    }

    return response.json();
}

async function updateProduct(id, product) {
    const response = await fetch(`${url}/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error(`HTTP ERROR [CODE]: ${response.status}`);
    }

    return response.json();
}

async function deleteProduct(id) {
    const response = await fetch(`${url}/products/${id}`, {
        method: 'DELETE'
    })

    if (!response.ok) {
        throw new Error(`HTTP ERROR [CODE]: ${response.status}`);
    }

    return response.json();
}

async function getUsers() {

    const response = await fetch(`${url}/users`, {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error(`HTTP ERROR [CODE]: ${response.status}`);
    }

    return response.json();
}

async function deleteUser(id) {
    const response = await fetch(`${url}/users/${id}`, {
        method: 'DELETE'
    })

    if (!response.ok) {
        throw new Error(`HTTP ERROR [CODE]: ${response.status}`);
    }

    return response.json();
}

async function updateUser(id, user) {
    const response = await fetch(`${url}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error(`HTTP ERROR [CODE]: ${response.status}`);
    }

    return response.json();
}
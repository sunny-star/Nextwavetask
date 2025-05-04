export async function login(username, password) {
    const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.token) {
        localStorage.setItem('token', data.token);
        return true;
    }
    alert('Login failed');
    return false;
}

export async function signup(username, password) {
    const res = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: username + '@example.com',
            username,
            password,
            name: { firstname: "First", lastname: "Last" },
            address: { city: "City", street: "Street", number: 1, zipcode: "12345", geolocation: { lat: "0", long: "0" } },
            phone: "1234567890"
        }),
    });
    return res.json();
}

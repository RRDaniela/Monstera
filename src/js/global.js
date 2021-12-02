function parseJwt(token) {

    if (!token) {
        return null;
    }

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    console.log(base64);

    return JSON.parse(jsonPayload);
};

const token = localStorage.getItem('token');
var decodedToken = parseJwt(token);
const anchor = document.getElementById('login-anchor');
anchor.style.display = 'none';

console.log(decodedToken);

if (decodedToken) {
    anchor.style.display = 'none';
} else {
    anchor.style.display = 'block';
}


if (decodedToken.role == "basic") {
    document.getElementById("settings").style.display = "none";
    console.log(decodedToken.role);
}
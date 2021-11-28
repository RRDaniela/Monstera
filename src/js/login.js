const signupForm = document.getElementById("login-up");
const signupButton = document.getElementById("signupBTN");

const form = document.getElementById("login-in");
const button = document.getElementById("loginBTN");

if (form) {
    console.log("PELOTUDO");

    button.addEventListener("click", (e) => {
        e.preventDefault();

        const email = form.email.value;
        const password = form.password.value;

        console.log(`EMAIL: ${email}, PASSWORD: ${password}`);

        login(email, password).then(data => {

            localStorage.setItem('token', data.token);

            console.log(data);

        }).catch(err => {
            console.log('God has forsaken us');
            console.error(err);
        })

    });
}

if (signupForm) {
    console.log("PELOTUDO 2");

    signupButton.addEventListener("click", (e) => {
        e.preventDefault();

        const email = signupForm.email.value;
        const password = signupForm.password.value;

        console.log(`EMAIL: ${email}, PASSWORD: ${password}`);

        signup(email, password).then(data => {

            console.log(data);

            alert('CUENTA CREADA jiji')

        }).catch(err => {
            console.log('God has forsaken us');
            console.error(err);
        })

    });
}
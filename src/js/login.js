//Mostrar menú
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up');

//cambiar a registrarse o a iniciar sesión
signUp.addEventListener('click', () => {
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

signIn.addEventListener('click', () => {
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    loginIn.classList.add('block')
    loginUp.classList.add('none')
})



const signupForm = document.getElementById("login-up");
const signupButton = document.getElementById("signupBTN");

const form = document.getElementById("login-in");
const button = document.getElementById("loginBTN");
const errorBox = document.getElementById('login_error_container');

errorBox.innerHTML = '';

if (form) {

    button.addEventListener("click", (e) => {
        e.preventDefault();

        const email = form.email.value;
        const password = form.password.value;

        console.log(`EMAIL: ${email}, PASSWORD: ${password}`);
        errorBox.innerHTML = '';

        login(email, password).then(data => {

            localStorage.setItem('token', data.token);

            window.location.replace('/index.html');
            console.log(data);

        }).catch(err => {
            errorBox.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Ha ocurrido un error iniciando sesión
                </div>
            `;
        })

    });
}

if (signupForm) {

    signupButton.addEventListener("click", (e) => {
        e.preventDefault();

        const email = signupForm.email.value;
        const password = signupForm.password.value;

        console.log(`EMAIL: ${email}, PASSWORD: ${password}`);

        signup(email, password).then(data => {

            console.log(data);

            loginIn.classList.remove('none')
            loginUp.classList.remove('block')

            loginIn.classList.add('block')
            loginUp.classList.add('none')

        }).catch(err => {
            console.log('God has forsaken us');
            console.error(err);
        })

    });
}
class Form {
    constructor(form, fields, button) {
        this.form = form;
        this.button = button;
        this.fields = fields;
        this.validateonSubmit();
    }


    validateonSubmit() {

        this.button.addEventListener("click", (e) => {
            /*  e.preventDefault(); */

            const email = this.form.email.value;
            const password = this.form.password.value;
            let errorBox = document.getElementById('login-error');



            console.log(`EMAIL: ${email}, PASSWORD: ${password}`);

            login(email, password).then(data => {

                localStorage.setItem('token', data.token);

                console.log(data);

            }).catch(err => {



                errorBox.innerHTML = `
                
                `
            });

        });
    }

    validateFields(field) {

        if (field.value.trim() === "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText}`,
                "error"
            );
            return false;
        }

        this.setStatus(field, null, "success");
        return true;
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");

        if (status === "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
        }

        if (status === "error") {
            errorMessage.innerText = message;

        }
    }

}
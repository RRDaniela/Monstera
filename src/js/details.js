import data from "../products2.js";

let prodId = 2;

$(data).each(function() {
    if (this.id == prodId) {
        let numF = parseInt(this.frijolitos);
        for (let i = 0; i < numF; i++) {
            var output = " <img class=\"frijol_image\" src=\"frijolito.png\">";
            $('#frijol_r').append(output);
        }
    }

});
/* Inserta el nombre del producto a la vista*/
$(data).each(function() {
    if (this.id == prodId) {
        var output = "<h1 id=\"prod_name\">" + this.title + "</h1>"
        $('#titulo_producto').append(output);
    }

});
/* Inserta el precio del producto a la vista*/
$(data).each(function() {
    if (this.id == prodId) {
        var output = "<h2>$</h2><h2 id=\"prod_price\">" + this.price + "</h2><p>c/u</p>";
        $('#precio_producto').append(output);
    }

});
/* Inserta la descripción del producto a la vista*/
$(data).each(function() {
    if (this.id == prodId) {
        var output = "<p>" + this.description + "</p>";
        $('#prod_desc').append(output);
    }

});



function sendShip() {
    let name = document.getElementById("nombre_envio").value;
    let lname = document.getElementById("apellido_envio").value;
    let address = document.getElementById("direccion_envio").value;
    let country = document.getElementById("pais_envio").value;
    let city = document.getElementById("ciudad_envio").value;
    let zip = document.getElementById("zip_envio").value;
    let tel = document.getElementById("tel_envio").value;
    let ship = document.getElementById("ship").value;

    return name, lname, address, country, city, zip, tel, ship;
}

function sendRegistration() {
    if (document.getElementById("pass_reg").value == document.getElementById("confirm_pass").value) {
        let email = document.getElementById("email_reg").value;
        let pass = document.getElementById("pass_reg").value;
        let name = document.getElementById("name_reg").value;
        let lname = document.getElementById("lname_reg").value;
        let tel = document.getElementById("tel_reg").value;
        let address = document.getElementById("address_reg").value;
        let city = document.getElementById("city_reg").value;
        let zip = document.getElementById("zip_reg").value;
        let country = document.getElementById("country_reg").value;
    } else {

    }
}




/*
function newGalleryImage(){
    const gImage = "<img src=" +this.img+ " alt=" +this.name+" onclick="myGallery(this);">";
*/
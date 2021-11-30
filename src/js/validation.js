/*
    const nombre = document.getElementById("nombre_modal");
    const img = document.getElementById("img_modal");
    const desc = document.getElementById("desc_modal");
    const precio = document.getElementById("precio_modal");

    $("#edit-product-form-btn").click(function() {
        console.log("#ModalEditar #nombre_modal").val();
        if ($("#ModalEditar #nombre_modal").val() == ""){
            nombre.setCustomValidity("El nombre no puede estar vacío");
        }
        else{
            nombre.setCustomValidity("");
        }
    });

    $("#edit-product-form-btn").click(function() {
        if ($("#ModalEditar #img_modal").val() == ""){
            img.setCustomValidity("La imagen no puede estar vacía");
        }
        else{
            img.setCustomValidity("");
        }
    });

    $("#edit-product-form-btn").click(function() {
        if ($("#ModalEditar #desc_modal").val() == ""){
            desc.setCustomValidity("La descripción no puede estar vacía");
        }
        else{
            desc.setCustomValidity("");
        }
    });

    $("#edit-product-form-btn").click(function() {
        if ($("#ModalEditar #precio_modal").val() == ""){
            precio.setCustomValidity("El precio no puede estar vacía");
        }
        else{
            precio.setCustomValidity("");
        }
    });
    */

/*
    img.addEventListener("input", function(event) {
        if (img.validity.typeMismatch){
            img.setCustomValidity("La imagen no puede estar vacía");
        }
        else{
            img.setCustomValidity("");
        }
    });

    desc.addEventListener("input", function(event) {
        if (desc.validity.typeMismatch){
            desc.setCustomValidity("La descripción no puede estar vacía");
        }
        else{
            desc.setCustomValidity("");
        }
    });

    precio.addEventListener("input", function(event) {
        if (precio.validity.typeMismatch){
            precio.setCustomValidity("El precio no puede estar vacío");
        }
        else{
            precio.setCustomValidity("");
        }
    });
    /*

    /*
$('#edit-product-form-btn').click(function(){
    //alert($('#ModalEditar #nombre_modal').val());
});*/

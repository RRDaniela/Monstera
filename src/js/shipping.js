function selectShipping(){
    const ops = document.querySelectorAll('input[name="shipping_type"]');
    let precio = document.getElementById("envio_precio");
    let selectedShipping;
    let subtotal = document.getElementById("subtotal_precio").innerHTML;
    let total = document.getElementById("total_precio");
    for(const op of ops){
        if(op.checked){
            selectedShipping = op.value;
            break;
        }
    }
    precio.innerHTML = selectedShipping;
    total.innerHTML = parseFloat(eval(subtotal) + eval(selectedShipping));
}
import data from "../products2.js";

getProducts().then(data => {
    const products = data.body;
    $(products).each(function() {
        if(this.description.includes("-8") || this.description.includes("8")){
        var output = `
        <div class="card col-sm-3"> 
        <img class="card-img-top"src="${this.image}">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-price">Precio: $ ${this.price}</p>
                <p class="card-description"> ${this.description}</p>
                <a id="description" href="#" class="btn btn-success btn-sm btn-block">Agregar a carrito <i class="ri-shopping-cart-2-fill"></i></a>
            </div>
    </div>
    </div>
        `;
        $('#placeholder').append(output);
    }});
}).catch(err => {

})



$('#search').keyup(function() {
    var yourtext = $(this).val();
    if (yourtext.length > 0) {
        var abc = $('.card').filter(function() {
            var str = $(this).text();
            var re = new RegExp(yourtext, "i");
            var result = re.test(str);
            if (!result) {
                return $(this);
            }
        }).hide();
    } else {
        $(".card").show();
    }
});
import data from "../products2.js";

class Products {

    products = [];

    constructor() {

        document.getElementById('search').value = '';

        this.productContainer = document.querySelector('.row');
        this.render().then(data => {
            this.searchProducts();
        }).catch(err => console.error(err));

    }

    async render() {
        this.productContainer.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        `;

        this.products = (await getProducts()).body;

        let productsHtml = '';
        this.products.forEach(product => {
            productsHtml += this.createDomElement(product);
        });

        this.productContainer.innerHTML = productsHtml;

    }

    createDomElement(product) {

        return `
        <div class="card col-sm-3"> 
            <img class="card-img-top"src="${product.image}">
            <div class=card-body>
                <h5 class=card-title>${product.name}</h5>
                <p class="text-justify">${product.description}</p>
                <p>Precio: $ ${product.price}</p>
                <a href="#" class="btn btn-success">Agregar a carrito<i class="ri-shopping-cart-2-fill"></i></a>
            </div>
        </div>
        `
    }

    searchProducts() {
        $('#search').keyup(function() {
            var yourtext = $(this).val();
            if (yourtext.length > 0) {
                $('.card').filter(function() {
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
    }

}

new Products();
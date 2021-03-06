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

        this.products.forEach(product => {

            const btn = document.getElementById(`${product._id}-cart`);
            const redirectToDetail = document.getElementById(`${product._id}-redirect`);

            btn.addEventListener('click', async(event) => {
                const id = btn.getAttribute('data-id');


                try {
                    await updateCart(id);
                    const successAlert = document.getElementById('success-box');

                    successAlert.style.display = 'block';

                    setTimeout(() => {
                        successAlert.style.display = 'none';
                    }, 2000);

                } catch (error) {
                    console.log(error);
                    const errorAlert = document.getElementById('error-box');

                    errorAlert.style.display = 'block';

                    setTimeout(() => {
                        errorAlert.style.display = 'none';
                    }, 2000);
                }

            });

            redirectToDetail.addEventListener('click', () => {
                window.location.replace(`/prod_detail.html?id=${product._id}`);
            });
        })

    }

    createDomElement(product) {



        return `
        <div class="card col-sm-3" id="${product._id}-redirect"> 
            <img class="card-img-top"src="${product.image}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-price">Precio: $ ${product.price}</p>
                <p class="card-description"> ${product.description}</p>
                <button  class="btn btn-success" id="${product._id}-cart" data-id="${product._id}">Agregar a carrito<i class="ri-shopping-cart-2-fill"></i></button>
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
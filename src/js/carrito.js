class Cart {
    cart = null;

    constructor() {

        this.getCart().then(_data => {
            const notfoundAlert = document.getElementById('notfound');
            if (this.cart.cart.length === 0) {
                notfoundAlert.style.display = 'block';
            } else {
                this.render();
            }

        }).catch(err => {
            console.error(err);
        });
    }

    createDomElement(product) {
        var output = `
        <div class="card col-md-4 col-lg-4"> 
            <img class="card-img-top" src="${product.image}">
            <div class=card-body>
                <h5 class="card-title"> ${product.name}</h5>
                <p>${product.description}</p>
                <ul class="list-group list-group-flush"> 
                    <li class="list-group-item"> ${product.price} </li>
                </ul>
                <button href="#" class="btn btn-danger" id="${product._id}-delete">Eliminar<i class="ri-delete-bin-5-fill"></i></button>
            </div>
        </div>
        `;

        return output;
    }

    render() {
        let innerHTML = '';
        this.cart.cart.forEach(product => {
            innerHTML += this.createDomElement(product);
        });

        let productContainer = document.getElementById('placeholder');
        let precio = document.getElementById("total_precio");
        productContainer.innerHTML = innerHTML;
        precio.innerText = this.cart.total;

        this.cart.cart.forEach(product => {
            const deleteBtn = document.getElementById(`${product._id}-delete`);

            deleteBtn.addEventListener('click', () => {
                deleteFromCart(product._id).then(data => {
                    this.getCart().then(_data => {
                        this.render();
                    }).catch(err => {
                        console.error(err);
                    });
                }).catch(err => {
                    console.error(err);
                })
            });

        })
    }

    async getCart() {
        const loadingSpinner = document.getElementById('loading');
        this.cart = (await getCart());
        loadingSpinner.style.display = 'none';
    }
}

new Cart();


/* import data from "../users2.js";
import products from "../products2.js";
let idUser = "1";
let product = JSON.stringify(products);
product = JSON.parse(product);



$(data).each(function() {
    let total = 0;
    let precio = document.getElementById("total_precio");
    console.log('hola')
    if (this.id == idUser) {
        let n = 0;
        let i = 0;
        while (n < this.cart.length) {
            if (this.cart[n].id == product[i].id) {
                var output = `
                    <div class="card col-md-4 col-lg-4">
                        <img class="card-img-top" src="${product[i].img}">
                        <div class=card-body>
                            <h5 class="card-title"> ${product[i].title}</h5>
                            <p>${product[i].description}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">" ${product[i].price} </li>
                            </ul>
                            <a href="#" class="btn btn-danger">"Eliminar"<i class="ri-delete-bin-5-fill"></i></a>
                        </div>
                    </div>"
                `;
                $('#placeholder').append(output);
                total += eval(product[i].price);
                n++;
            }
            i++;
            if (n < this.cart.length && i == product.length) {
                i = 0;
            }
        }
        //console.log(this.cart[0]);
        precio.innerHTML = total;
        console.log(total);
    }
}) */
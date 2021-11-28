import data from "../products2.js";

let products = [];

getProducts().then(data => {
    products = data.body;
    $(products).each(function(index) {

        let elemId = 0;

        var output = `
        <div class="card col-sm-3"> 
            <img class="card-img-top" src="${this.image}">
            <div class=card-body>
                <h5 class=card-title>${this.name}</h5>
                <p class="text-justify">${this.description}</p>
                <p class="font-weight-bold">Precio: $ ${this.price}</p>
                <a href="#" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#ModalEditar" data-id="${this._id}" id="${index}-edit">Editar<i class="ri-edit-2-fill"></i></a>
                <a href="#" class="btn btn-danger btn-sm" data-id="${this._id}" id="${index}-delete">Eliminar<i class="ri-delete-bin-5-fill"  ></i></a>
            </div>
        </div>`;
        $('#placeholder').append(output);

        const deleteBtn = document.getElementById(`${index}-delete`);
        const editBtn = document.getElementById(`${index}-edit`);

        editBtn.onclick = function editProduct(event) {

            const id = event.target.getAttribute('data-id');

            console.log(id);

            const editProductForm = document.getElementById('edit-product-form');
            const editProductFormBtn = document.getElementById('edit-product-form-btn');

            let product = products.find(product => product._id === id);

            if (editProductForm) {

                console.log("Hey")

                editProductForm.name.value = product.name;
                editProductForm.image.value = product.image;
                editProductForm.description.value = product.description;
                editProductForm.price.value = product.price;

                editProductFormBtn.addEventListener("click", (e) => {
                    e.preventDefault();

                    const name = editProductForm.name.value;
                    const image = editProductForm.image.value;
                    const description = editProductForm.description.value;
                    const price = editProductForm.price.value;

                    updateProduct(id, { name, image, description, price }).then(data => {
                        console.log(data);
                    }).catch(err => {
                        console.error(err);
                    });

                });
            }
        }

        deleteBtn.onclick = function(event) {

            event.preventDefault();

            const id = event.target.getAttribute('data-id');

            deleteProduct(id).then(data => {
                console.log('Eliminado');
            }).catch(err => {
                console.error(err);
            })

        }
    });
}).catch(err => {
    console.error(err);
})



function deleteProducts() {

}

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

const createProductForm = document.getElementById('create-product-form');
const createProductFormBtn = document.getElementById('create-product-form-btn');

if (createProductForm) {
    createProductFormBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const name = createProductForm.name.value;
        const image = createProductForm.image.value;
        const description = createProductForm.description.value;
        const price = createProductForm.price.value;

        createProduct({ name, image, description, price }).then(data => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        });

    });
}
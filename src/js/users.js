import data from "../products2.js";

let users = [];



getUsers().then(data => {

    console.log(data);

    users = data.body;
    $(users).each(function(index) {

        let elemId = 0;

        var output = `
        <div class="card col-sm-3"> 
            <img class="card-img-top" src="userPhoto.png">
            <div class=card-body>
                <h5 class=card-title>${this.email}</h5>
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

            let user = users.find(user => user._id === id);
            console.log(user);

            if (editProductForm) {

                console.log("Hey")

                editProductForm.email.value = user.email;
                /*editProductForm.image.value = product.image;
                editProductForm.description.value = product.description;
                editProductForm.price.value = product.price;
                */
                editProductFormBtn.addEventListener("click", (e) => {
                    e.preventDefault();

                    const email = editProductForm.email.value;
                    /*  const image = editProductForm.image.value;
                    const description = editProductForm.description.value;
                    const price = editProductForm.price.value;
                */
                    updateUser(id, { email }).then(data => {
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

            deleteUser(id).then(data => {
                console.log('Eliminado');
            }).catch(err => {
                console.error(err);
            })

        }
    });
}).catch(err => {
    console.error(err);
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

const createProductForm = document.getElementById('create-product-form');
const createProductFormBtn = document.getElementById('create-product-form-btn');

if (createProductForm) {
    createProductFormBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const name = createProductForm.email.value;


        createProduct({ email }).then(data => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        });

    });
}
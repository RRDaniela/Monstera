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
                <a href="#" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#ModalEditarUser" data-id="${this._id}" id="${index}-edit">Editar<i class="ri-edit-2-fill"></i></a>
                <button class="btn btn-danger btn-sm" data-id="${this._id}" id="${index}-delete" data-toggle="modal" data-target="#ModalConfirmar" >Eliminar<i class="ri-delete-bin-5-fill"  ></i></button>
            </div>
        </div>
        
        <!--Modal Confirmar-->
        <div class="modal fade" id="ModalConfirmar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Editar usuario</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <span>¿Seguro que quiere eliminar este usuario?</span>
                    </div>
                    <div class="modal-footer">
                        
                        <button type="button" class="btn btn-primary" id="${index}-delete2">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>`;
        $('#placeholder').append(output);


        if (decodedToken.role == "admin") {
            document.getElementById(`${index}-delete2`).style.display = "none";
            document.getElementById('chooseRole').style.display = "none";

        }


        const deleteBtn = document.getElementById(`${index}-delete2`);
        const editBtn = document.getElementById(`${index}-edit`);

        editBtn.onclick = function editProduct(event) {

            const id = event.target.getAttribute('data-id');

            console.log(id);

            const editProductForm = document.getElementById('edit-product-form');
            const editProductFormBtn = document.getElementById('edit-user-btn');

            let user = users.find(user => user._id === id);
            console.log(user);

            if (editProductForm) {

                console.log("Hey")

                editProductForm.email.value = user.email;
                editProductForm.rol.value = user.role;

                editProductFormBtn.addEventListener("click", (e) => {
                    e.preventDefault();

                    const email = editProductForm.email.value;
                    const role = editProductForm.rol.value;

                    console.log(email, role);
                    updateUser(id, { email, role }).then(data => {
                        refreshPage();
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
            console.log(id);
            deleteUser(id).then(data => {
                //refreshPage();
                console.log('Eliminado');
            }).catch(err => {
                console.error(err);
            })

        }
    });
}).catch(err => {
    console.error(err);
})


function refreshPage() {
    window.location.reload();
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

        const name = createProductForm.email.value;


        createProduct({ email }).then(data => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        });

    });
}

$("#edit-user-btn").click(function() {
    //refreshPage();
    let mail = ($("#ModalEditarUser #email_user").val());
    let rol = ($("#ModalEditarUser #rol_user").val());

    if (mail == "" || rol == "") {
        alert("No puede haber campos vacios");
    }

});
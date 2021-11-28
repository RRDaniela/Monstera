import data from "../users2.js";
import products from "../products2.js";
let idUser = "1";
let product = JSON.stringify(products);
product = JSON.parse(product);

$(data).each(function () {
    let total =0;
    let precio = document.getElementById("total_precio");
    if(this.id == idUser){
        let n=0;
        let i =0;
        while(n<this.cart.length){
            if(this.cart[n].id==product[i].id){
                var output= "<div class=\"card col-sm-6\"> <img class=\"card-img-top\"src=" +product[i].img+ "><div class=card-body><h5 class=card-title>"+product[i].title+"</h5><p>"+product[i].description+"</p><ul class=\"list-group list-group-flush\"> <li class=\"list-group-item\">"+product[i].price+"</li></ul><a href=\"#\" class=\"btn btn-danger\">"+"Eliminar"+"<i class=\"ri-delete-bin-5-fill\"></i></a></div></div>";
                $('#placeholder').append(output);
                total+=eval(product[i].price);
                n++;
            }
            i++;
            if(n<this.cart.length && i==product.length){
                i=0;
            }
        }
        //console.log(this.cart[0]);
        precio.innerHTML=total;
        console.log(total);
    }
})

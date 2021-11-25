import data from "../products2.js";
/*document.body.onload = rowPro

function rowProduct (){
  const row = document.createElement("div");
  const body = document.querySelector("body");
  body.append(row);
  row.setAttribute("class", "row");
}*/
const row = document.createElement("div");
row.setAttribute("class", "row");
row.setAttribute("id", "row");
const body = document.querySelector("body");
body.append(row);

const buildProductCard = product=>{
  const col = document.createElement("div");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const innerDiv = document.createElement("div");
  const h5 = document.createElement("h5");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const a2 = document.createElement("a2");
  const i = document.createElement("i");

  //Agregar elementos al dom
  const body = document.querySelector('#row');
  body.append(col);
  col.append(div);
  div.append(img);
  div.append(innerDiv);
  innerDiv.append(h5);
  innerDiv.append(p);
  innerDiv.append(a);
  innerDiv.append(a2);

  //Agregar contenido.
  col.setAttribute("class", "col-sm-4");
  div.setAttribute("class", "card");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("src", product.img);
  innerDiv.setAttribute("class","card-body");
  h5.setAttribute("class", "card-title");
  h5.innerHTML=product.title;
  p.setAttribute=("class", "card-text");
  p.textContent=product.description;
  a.setAttribute("class", "btn btn-warning");
  a.setAttribute("href", "#");
  a.innerHTML =' Editar <i class="ri-edit-2-fill"></i>';
  a2.setAttribute("class", "btn btn-danger");
  a2.setAttribute("href", "#");
  a2.innerHTML =' Eliminar <i class="ri-delete-bin-5-fill"></i>';
}
data.forEach(product => buildProductCard(product));

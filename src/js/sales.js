import data from "../products2.js";
console.log(data);



  $(data).each(function () {
    var output= "<div class=\"card col-sm-3\"> <img class=\"card-img-top\"src=\"sales.jpg\"><div class=card-body><h5 class=card-title>"+this.title+"</h5><p>"+this.description+"</p><a href=\"#\" class=\"btn btn-success\">"+"Agregar a carrito"+"<i class=\"ri-shopping-cart-2-fill\"></i></a></div></div>";
    $('#placeholder').append(output);
});

$('#search').keyup(function () {
  var yourtext = $(this).val();
  if (yourtext.length > 0) {
      var abc = $('.card').filter(function () {
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
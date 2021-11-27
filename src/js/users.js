import data from "../users2.js";
  $(data).each(function () {
    var output= "<div class=\"card col-sm-3\"> <img class=\"card-img-top\"src=\"users.png\"><div class=card-body><h5 class=card-title>"+this.firstName+" "+ this.lastNameM+"</h5><p>"+this.email+"</p><a href=\"#\" class=\"btn btn-warning btn-sm\">"+"Editar"+"<i class=\"ri-edit-2-fill\"></i></a><a href=\"#\" class=\"btn btn-danger btn-sm\">"+"Eliminar"+"<i class=\"ri-delete-bin-5-fill\"></i></a></div></div>";
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
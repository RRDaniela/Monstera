$(document).ready(function(){
    $('#add-form').on('submit', function(e){
        e.preventDefault();
        var title = $('#title').val();
        console.log(title);
    })
})
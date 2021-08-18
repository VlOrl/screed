$('.burger_header').click(function(event){
    $('.burger_header, .nav_header').toggleClass('active');
    $('body').toggleClass('lock');
});

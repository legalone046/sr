jQuery('document').ready(function($){
  var botonmenu = $('.menu-icon'),
      menu = $('.navigation ul');

  botonmenu.click(function() {

    if( menu.hasClass('show')) {

      menu.removeClass('show');
    } else {

      menu.addClass('show');
    }


  });



});
$(function(){
  var hamburger_menu = $('#js-toggle-sp-menu'),
  nav_menu = $('#js-toggle-sp-menu-target'),
  nav_link = $('.p-header__nav-link');

  hamburger_menu.on('click', function(){
    nav_menu.toggleClass('is-active');
    hamburger_menu.toggleClass('fa-xmark is-active');
  });

  nav_link.on('click', function(){
    nav_menu.toggleClass('is-active');
    hamburger_menu.toggleClass('fa-xmark is-active');
  });
});
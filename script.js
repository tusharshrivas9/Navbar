document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.navbar-hamburger');
    var menu = document.querySelector('.navbar-menu');
  
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
  });
  
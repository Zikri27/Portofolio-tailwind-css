// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// navbar fixed

window.onscroll = function () {
  const header = document.querySelector('header');
  const fixNap = header.offsetTop;

  if (window.pageYOffset > fixNap) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

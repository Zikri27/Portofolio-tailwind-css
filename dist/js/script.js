// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// clik diluar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// navbar fixed

window.onscroll = function () {
  const header = document.querySelector('header');
  const fixNap = header.offsetTop;
  const top = document.querySelector('#to-top');

  if (window.pageYOffset > fixNap) {
    header.classList.add('navbar-fixed');
    top.classList.remove('hidden');
    top.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    top.classList.add('hidden');
    top.classList.remove('flex');
  }
};

// Dark mode toggle

const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle dark/light mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

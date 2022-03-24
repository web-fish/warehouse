'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('I\'m alive');

  const mobileMenu = document.getElementById('mobileMenu');
  const navMenu = document.querySelector('.header__menu');
  const body = document.querySelector('body');
  const pageUp = document.getElementById('up');

  mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('header__mobile--active');
    navMenu.classList.toggle('header__menu--active');
    body.classList.toggle('body--active');
  });

  function closeMobileMenu(e) {
    if (e.target.classList.contains('header__list-link')) {
      mobileMenu.classList.remove('header__mobile--active');
      navMenu.classList.remove('header__menu--active');
      body.classList.remove('body--active');
    }
  };

  document.addEventListener('click', closeMobileMenu);

  pageUp.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

});
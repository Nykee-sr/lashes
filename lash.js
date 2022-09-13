'use strict';

const main = document.querySelector('#main');
const menu = document.querySelector('#menupage');
const bss = document.querySelector('#bss');
const footdiv = document.querySelector('#footdiv');
const footer = document.querySelector('footer');
const shop = document.querySelector('#shop');
const gallery = document.querySelector('#gallery');
const service = document.querySelector('#service');
const book = document.querySelector('#book');
const aftercare = document.querySelector('#aftercare');
const head = document.querySelector('#head');

function blockPage(a, b, c, d) {
  a = a.style.display = 'none';
  b = b.style.display = 'none';
  c = c.style.display = 'none';
  d = d.style.display = 'none';

  return { a, b, c, d };
}

function showPage(a, b) {
  a = a.style.display = 'block';
  b = b.style.display = 'block';

  return { a, b };
}

const newPage = document.querySelector('.newpage');
const scrollToTop = () => window.scrollTo({ top: 0 });

/* main h1 */
const gohome = () => {
  location.reload();
};

/* SERVICE PAGE */
const servicePage = () => {
  blockPage(aftercare, gallery, shop, head);
  showPage(service, footer);
};

/* Shop PAGE */
const shopPage = () => {
  blockPage(service, aftercare, gallery, head);
  showPage(shop, footer);
};

/* aftercare PAGE */
const aftercarePage = () => {
  blockPage(service, shop, gallery, head);
  showPage(aftercare, footer);
};

/* gallery page */
const galleryPage = () => {
  blockPage(service, shop, aftercare, head);
  showPage(gallery, footer);
};

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

var widget = new SimplybookWidget({
  widget_type: 'iframe',
  url: 'https://thelashbookings.simplybook.me',
  theme: 'air',
  theme_settings: {
    timeline_modern_display: 'as_slots',
    timeline_hide_unavailable: '1',
    hide_past_days: '0',
    timeline_show_end_time: '0',
    sb_base_color: '#6154c1',
    display_item_mode: 'block',
    booking_nav_bg_color: '#d1e9c6',
    body_bg_color: '#f2f2f2',
    sb_review_image: '',
    dark_font_color: '#333333',
    light_font_color: '#ffffff',
    sb_company_label_color: '#ffffff',
    hide_img_mode: '0',
    show_sidebar: '1',
    sb_busy: '#b3b3b3',
    sb_available: '#dbd6ff',
  },
  timeline: 'flexible',
  datepicker: 'top_calendar',
  is_rtl: false,
  app_config: { allow_switch_to_ada: 0, predefined: [] },
});

console.log(widget);

/* var widget = new SimplybookWidget({
  widget_type: 'iframe',
  url: 'https://thelashbookings.simplybook.me',
  theme: 'air',
  theme_settings: {
    timeline_modern_display: 'as_slots',
    timeline_hide_unavailable: '1',
    hide_past_days: '0',
    timeline_show_end_time: '0',
    sb_base_color: '#6154c1',
    display_item_mode: 'block',
    booking_nav_bg_color: '#d1e9c6',
    body_bg_color: '#f2f2f2',
    sb_review_image: '',
    dark_font_color: '#333333',
    light_font_color: '#ffffff',
    sb_company_label_color: '#ffffff',
    hide_img_mode: '0',
    show_sidebar: '1',
    sb_busy: '#b3b3b3',
    sb_available: '#dbd6ff',
  },
  timeline: 'flexible',
  datepicker: 'top_calendar',
  is_rtl: false,
  app_config: { allow_switch_to_ada: 0, predefined: [] },
}); */

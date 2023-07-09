/* ==========================================
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function () {
  if ($(window).scrollTop() >= 36.5) {
    $('nav').addClass('fixed-header')
    $('nav div').addClass('visible-title')
  } else {
    $('nav').removeClass('fixed-header')
    $('nav div').removeClass('visible-title')
  }
})

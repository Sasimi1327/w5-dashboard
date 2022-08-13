$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".navList a").not(this).removeClass("active");
    $(this).toggleClass("active");
  });

  $(".page-link").click(function () {
    $(".page-item a").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
});

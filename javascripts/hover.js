$(function() {
  $("a").mouseenter(function() {
    $(".logo").css("background-image", "url('images/logo-full-spica.svg')");
  });

  $("a").mouseleave(function() {
    $(".logo").css("background-image", "url('images/logo-full.svg')");
  });
});

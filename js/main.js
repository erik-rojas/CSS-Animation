(function ($) {
  /* =============== Home Page =============== */
  $("#btnProduct").click(function() {
    $(".product-page").css("display", "block");
    $(".btn-menu").css("background-image", "url('./images/menu-black.png')");
    $(".btn-search").css("background-image", "url('./images/search-black.png')");
  });

  $(".bottom-section-content #btnProduct").click(function() {
    $(".product-page").css("display", "block");
    $(".btn-menu").css("background-image", "url('./images/menu-black.png')");
    $(".btn-search").css("background-image", "url('./images/search-black.png')");
  });

  /* =============== Product Page =============== */
  $(".btn-orange").click(function() {
    $(".btn-orange").css("width", "100%");
    $(".btn-black").css("width", "75%");
    $(".btn-dark-grey").css("width", "55%");
    $(".btn-grey").css("width", "30%");
  });
  
  $(".btn-black").click(function() {
    $(".btn-orange").css("width", "75%");
    $(".btn-black").css("width", "100%");
    $(".btn-dark-grey").css("width", "55%");
    $(".btn-grey").css("width", "30%");
  });
  
  $(".btn-dark-grey").click(function() {
    $(".btn-orange").css("width", "55%");
    $(".btn-black").css("width", "75%");
    $(".btn-dark-grey").css("width", "100%");
    $(".btn-grey").css("width", "30%");
  });

  $(".btn-grey").click(function() {
    $(".btn-orange").css("width", "25%");
    $(".btn-black").css("width", "55%");
    $(".btn-dark-grey").css("width", "75%");
    $(".btn-grey").css("width", "100%");
  });
})(jQuery);
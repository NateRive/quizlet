$(function() {
  $(".create-folder").on("click", function() {
    function modalResize() {
      var w = $(window).width()
      var h = $(window).height()
      var cw = $(".modal-form").outerWidth()
      var ch = $(".modal-form").outerHeight()
      $(".modal-form").css({
        "left": ((w - cw) / 2) + "px",
        "top": ((h - ch) / 2) + "px"
      });
    }
    modalResize();
    $(".modal-form").fadeIn();
    $(".modal-bg").fadeIn();
  });
});

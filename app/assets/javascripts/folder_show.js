$(function() {
  $("#open__folder-modal").on("click", function() {
    function modalResize() {
      var w = $(window).width();
      var h = $(window).height();
      var cw = $(".folder__modal-form").outerWidth();
      var ch = $(".folder__modal-form").outerHeight();
      $(".folder__modal-form").css({
        "left": ((w - cw) / 2) + "px",
        "top": ((h -ch) / 2) + "px"
      });
    }
    modalResize();
    $(".folder__modal-form").fadeIn();
    $(".modal-bg").fadeIn();
  });

  function appendHTML(id) {
    var html = `
    <input value="${id}" type="hidden" name="folder[subject_ids][]">
    `
    return html
  }

  $(".subject-title").on("click", ".nonadded", function() {
    var id = $(this).parent().parent().data("id")
    var html = appendHTML(id);
    $(this).parent().append(html);
    $(this).removeClass("nonadded").addClass("added");
    $(this).text("ー");
  });

  $(".subject-title").on("click", ".added", function() {
    $(this).next().remove();
    $(this).removeClass("added").addClass("nonadded");
    $(this).text("+");
  });
});

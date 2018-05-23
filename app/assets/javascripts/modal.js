$(function() {
  function deleteModal(target) {
    target.css("display", "none");
    $(".modal-bg").css("display", "none");
  }

  $(".modal-header-wrapper").find("span").on("click", function() {
    target = $(this).closest(".modal-form");
    deleteModal(target);
  });

  $(".folder__modal-header").find(".right").on("click", function() {
    target = $(this).closest(".folder__modal-form");
    deleteModal(target);
  });
});

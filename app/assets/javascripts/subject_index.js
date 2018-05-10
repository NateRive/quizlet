$(function() {
  function appendHTML() {
    var count = $(".word_boxes").data("count")
    var html = `
    <div class="word_set">
      <span class="word_box__index">
        ${count}
      </span>
       <div class="word_box__left">
         <input class="word_box" type="text" name="subject[words_attributes][${count}][face]"/>
         表
       </div>
       <div class="word_box__right">
         <input class="word_box" type="text" name="subject[words_attributes][${count}][flip]"/>
         裏
       </div>
     </div>
    `
    $(".word_boxes").data("count", count + 1);
    return html
  }

  $(".add_card__wrapper").on("click", function() {
    console.log("aa");
    var html = appendHTML()
    $(".word_boxes").append(html);
  });

  function changeTrash() {
    $(document).on("mouseenter", ".word_set", function() {
      $(this).find(".word_box__index").text("");
      var icon = `<i class="fa fa-lg fa-trash" aria-hidden="true"></i>`
      $(this).find(".word_box__index").append(icon);
    });

    $(document).on("mouseleave", ".word_set", function() {
      var prevIndex = $(this).prev().find(".word_box__index").text();
      $(this).find("i").remove();
      $(this).find(".word_box__index").text(Number(prevIndex) + 1);
    });
  }

  changeTrash();

  $(document).on("click", ".fa-trash", function() {
    var wordSet = $(this).parent().parent();
    if ($(wordSet).next()[0]) {
      var prevIndex = $(wordSet).prev().find(".word_box__index").text();
      $(wordSet).remove();
      $(".word_box__index").each(function(index, value) {
        if (index >= prevIndex) {
          var tmp = $(value).text()
          $(value).text(tmp - 1);
        }
      });
    }
  });
});

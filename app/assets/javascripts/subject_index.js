$(function() {
  var appendIndex = $(".word_set").length
  function appendHTML() {
    var count = $(".word_set").last().find(".word_box__index").text();
    var html = `
    <div class="word_set">
      <span class="word_box__index">
        ${ Number(count) + 1 }
      </span>
       <div class="word_box__left">
         <input class="word_box" type="text" name="subject[words_attributes][${ appendIndex }][face]" id="subject_words_attributes_${ appendIndex }_face" />
         表
       </div>
       <div class="word_box__right">
         <div class="word_box__right--content">
           <input class="word_box" type="text" name="subject[words_attributes][${ appendIndex }][flip]" id="subject_words_attributes_${ appendIndex }_flip"/>
           <label>
             <i class="fa fa-picture-o"  aria-hidden="true"></i>
             <input class="image-picture" type="file" name="subject[words_attributes][${ appendIndex }][image]" id="subject_words_attributes_${ appendIndex }_image" />
           </label>
         </div>
         裏
       </div>
    </div>
    `
    $(".word_boxes").data("count", count + 1);
    appendIndex += 1;
    return html
  }

  $(".add_card__wrapper").on("click", function() {
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
      var tmp = $(this).prevAll(".word_set")[0]
      var prevIndex = $(tmp).find(".word_box__index").text();
      $(this).find(".word_box__index").empty();
      $(this).find(".word_box__index").text(Number(prevIndex) + 1);
    });
  }

  changeTrash();

  $(document).on("click", ".fa-trash", function() {
    var wordSet = $(this).parent().parent();
    if ($(wordSet).nextAll(".word_set")[0]) {
      $(wordSet).nextAll(".word_set").each(function(index, value) {
          var tmp = $(value).find(".word_box__index").text()
          $(value).find(".word_box__index").text(tmp - 1);
          $(wordSet).remove();
      });
    } else {
      $(wordSet).remove();
    }
  });
});

$(function() {
  var url = new RegExp(".+words")
  if (window.location.href.match(url)) {
  $(".word-square").on("click", function () {
    // $(this).quickFlip
    if ($(".face-side").hasClass("now")) {
      $(".face-side").removeClass("now");
      $(".flip-side").addClass("now");
    } else if ($(".flip-side").hasClass("now")) {
      $(".flip-side").removeClass("now");
      $(".face-side").addClass("now");
    }
  });

  var index = 0
  var info = []
      $(".later").on("click", function() {
        // 今のインデックスが配列の最後なら、ストップ
        var words = $(".word__wrapper").data('word');
        console.log(words);
        console.log(words[index + 1]);
        var FaceFlip = $(".now").hasClass("face-side") ? "face" : "flip"
        info[index] = FaceFlip
        console.log(FaceFlip);
        index += 1;
        $(".face-side").removeClass("now");
        $(".flip-side").removeClass("now");
        $(".face-side__wrapper__sentence").text(words[index][1]);
        $(".flip-side__wrapper__image").attr("src", "/uploads/word/image/" + words[index][0] + "/" + words[index][2]);
        $(".flip-side__wrapper__sentence").text(words[index][3]);
        if (info[index] == null || info[index] == "face") {
            $(".face-side").addClass("now");
        } else if (info[index == "flip"]) {
          $(".flip-side").addClass("now");
        }
      });
  }
});

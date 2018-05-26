$(function() {
  var url = new RegExp(".+words")
  if (window.location.href.match(url)) {
    var words = $(".word__wrapper").data('word');
    var index = 0
    var info = []

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

    $(".later").on("click", function() {
      if (index == words.length - 1) {
        return false;
      }
      var FaceFlip = $(".now").hasClass("face-side") ? "face" : "flip"
      info[index] = FaceFlip
      index += 1;
      $(".face-side").removeClass("now");
      $(".flip-side").removeClass("now");
      $(".face-side__wrapper__sentence").text(words[index][1]);
      if (words[index][2]) {
        var url = "/uploads/word/image/" + words[index][0] + "/" + words[index][2]
        $(".flip-side__wrapper__image").attr("src", url);
      }
      $(".flip-side__wrapper__sentence").text(words[index][3]);
      if (info[index] == null || info[index] == "face") {
          $(".face-side").addClass("now");
      } else if (info[index == "flip"]) {
        $(".flip-side").addClass("now");
      }
      if (index == words.length - 1) {
        $(".later").css("background-color", "gray");
      }
    });

    $(".former").on("click", function() {
      
    });
  }
});

$(function() {
  var url = new RegExp(".+words")
  if (window.location.href.match(url)) {
    var words = $(".word__wrapper").data('word');
    var index = 0
    var info = []

    if (index == 0) {
      console.log("aa");
      $(".former").css("background-color", "gray")
    }

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
      } else {
        $(".former").css("background-color", "#81F7F3");
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
      if (index == 0) {
        return false;
      } else if (index == words.length - 1) {
        $(".later").css("background-color", "#81F7F3");
      }
      index -= 1;
      $(".face-side").removeClass("now");
      $(".flip-side").removeClass("now");
      $(".face-side__wrapper__sentence").text(words[index][1]);
      if (words[index][2]) {
        var url = "/uploads/word/image/" + words[index][0] + "/" + words[index][2]
        $(".flip-side__wrapper__image").attr("src", url);
      } else if (words[index + 1][2]) {
        $(".flip-side__wrapper__image").attr("src", "");
      }
      $(".flip-side__wrapper__sentence").text(words[index][3]);
      if (info[index] == "face") {
        $(".face-side").addClass("now");
      } else {
        $(".flip-side").addClass("now");
      }
    });
  }
});

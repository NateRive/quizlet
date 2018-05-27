$(function() {
  var url = new RegExp(".+words")
  if (window.location.href.match(url)) {
    var words = $(".word__wrapper").data('word');
    var index = 0
    var info = []

    function pageChangeRemove() {
      $(".face-side").removeClass("now");
      $(".flip-side").removeClass("now");
      if (words[index][2]) {
        $(".flip-side__wrapper__image").attr("src", "");
      }
    }

    function pageChangeWork() {
      if (words[index][2]) {
        var url = "/uploads/word/image/" + words[index][0] + "/" + words[index][2]
        $(".flip-side__wrapper__image").attr("src", url);
      }
      $(".face-side__wrapper__sentence").text(words[index][1]);
      $(".flip-side__wrapper__sentence").text(words[index][3]);
    }

    function faceOrFlip() {
      if (info[index] == "face") {
        $(".face-side").addClass("now");
      } else {
        $(".flip-side").addClass("now");
      }
    }

    function formerGray() {
      if (index == 0) {
        $(".former").css("background-color", "gray")
      }
    }

    formerGray();

    $(".word-square").on("click", function () {
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
      pageChangeRemove();
      index += 1;
      pageChangeWork();
      console.log(info);
      console.log(info[index]);
      if (info[index] == null || info[index] == "face") {
          $(".face-side").addClass("now");
      } else if (info[index] == "flip") {
        console.log("passed");
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
      var FaceFlip = $(".now").hasClass("face-side") ? "face" : "flip"
      info[index] = FaceFlip
      pageChangeRemove();
      index -= 1;
      pageChangeWork();
      faceOrFlip();
      formerGray();
    });

    $(".random").on("click", function() {
      pageChangeRemove();
      for(var i = words.length - 1; i > 0; i--)　{
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = words[i];
        words[i] = words[r];
        words[r] = tmp;
      }
      pageChangeWork();
      $(".face-side").addClass("now");
    });
  }
});

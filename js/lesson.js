$(document).ready(function () {
  $(".lesson-content").first().slideDown();

  $(".fa-arrow-right").click(function () {
    $(".lesson-nav").toggleClass("full");
  });

  var buttonClicked = false;

  $(".nav-item").click(function () {
    $(".nav-item").removeClass("arrow-left");
    $(this).addClass("arrow-left").addClass("disable");

    let target = $(this).attr("data-target");

    if ($(".lesson-content.active").find("video").length) {
      $(".lesson-content.active").find("video").get(0).pause();
    }

    $(".lesson-content").removeClass("active").slideUp();
    $("#" + target)
      .toggleClass("active")
      .slideDown();
  });

  $(".click-check").click(function () {
    $(this).addClass("completed");
  });

  $("video").on("ended", function () {
    let completed = $(".lesson-content.active").attr("id");
    $(".lesson-nav").find(`[data-target='${completed}']`).addClass("completed");
  });

  $(".expand").click(function () {
    $(this)
      .toggleClass("compress")
      .children()
      .toggleClass("fa-expand")
      .toggleClass("fa-compress");
    $(".lesson-wrapper").toggleClass("fullpage");
  });

  $("#test").click(function () {
    $(".fa-long-arrow-right").slideDown();
  });
});

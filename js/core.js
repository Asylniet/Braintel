$(function () {
  $("#header").load("/header.html");
});

$(function () {
  $("#footer").load("/footer.html");
});

$("a[href*=#]").on("click", function (e) {
  var anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top - 82,
      },
      1200
    );
  e.preventDefault();
  return false;
});

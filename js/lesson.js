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

  const circle = $(".progress-ring-circle");
  const radius = circle.attr("r");
  const circumference = 2 * Math.PI * radius;
  const percentage = $('.percent').attr("data-target");

  circle.css("stroke-dasharray", `${circumference} ${circumference}`);
  circle.css("stroke-dashoffset", circumference)

  function setProgress(percent){
	  const offset = circumference - percent / 100 * circumference;
	  circle.css('stroke-dashoffset', offset);
  }

  $('#test-form').submit(function(e){
	$('.finish').addClass('active');
	$('body').addClass('lock');
	e.preventDefault();
	setTimeout(function(){
		setProgress(percentage);
	}, 700);
  });

  $('.close').click(function(){
	  $('.finish').removeClass('active');
		$('body').removeClass('lock');
		setProgress(0);
  })
});

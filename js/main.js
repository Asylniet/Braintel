$(document).ready(function () {
  var browserWindow = $(window);
  // :: 1.0 Preloader Active Code
  browserWindow.on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });
  //burger-menu
  $(".burger").click(function () {
    $(".burger,.nav,.logo-font,.logo").toggleClass("active");
	 $("body").toggleClass("lock");
	 $(".search").removeClass("active");
	 $('.account-area, .logo-font').removeClass('opacity');
	 $('.account-control').css('display', 'none');
  });

  $("#course_btn").on("click touch", function (ev) {
    ev.preventDefault();
    $(this).next().toggleClass("active");
    $(this).toggleClass("active");
  });

  $(".lvl2").click(function (eve) {
    eve.preventDefault();
    $(this).toggleClass("active").next().slideToggle(1000, "linear");
    //  $(this).next().toggleClass("active");
    //  $(this).toggleClass("active");
  });

  var width = $(window).width();
  if (width < 630) 
  {
	  $('.search-btn').on('click', function(eventually){
		  eventually.preventDefault;
		  $(this).toggleClass('color-b');
		  $(".search").toggleClass("active");
		//   if its necessary
		//   $(".logo-font, .account-area").toggleClass("disappear");
		});
	}

	$('.account').on('click', function(){
		$('.account-control').slideToggle(300);
	});

  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $(".burger,.nav,.logo-font,.logo").removeClass("active");
    $("body").removeClass("lock");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 82,
      },
      700
    );
  });
});

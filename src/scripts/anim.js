$(window)
	.on("scroll", function() {
		if ($(window).scrollTop() > 300) {
			$(".header").addClass("header_active");
			$(".skew_intro").addClass("reset_skew");
		} else {
			$(".header").removeClass("header_active");
			$(".skew_intro").removeClass("reset_skew");
		}
	});

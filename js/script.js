document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.getElementById('preload');
		if ( preloader.classList.contains("preloader-fade")) {
			preloader.classList.remove("preloader-fade");
		} else {
			preloader.classList.add("preloader-fade");
		}
	}, 1500);
}

$(document).ready(function () {

		wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       50,          
                      mobile:       false,       
                      live:         true        // default
                    }
                    )
                    wow.init();





	$(".menu").on("click", function () {
		$(this).toggleClass("menu-active")
	});

	$(window).on("scroll", function () {
			if ( $(window).scrollTop()) {
				$(".nav").addClass("nav-active");
				$(".nav a").css("color", "#fff");
				$(".nav").css("padding-top", "0");
				$(".nav").css("padding-bottom", "0");
			} else {
				$(".nav").removeClass("nav-active");
				$(".nav a").css("color", "#4d4959");
				$(".nav").css("padding-top", "15px");
				$(".nav").css("padding-bottom", "15px");
			}
		
	});


	$(".menu").on("click", function () {
		$('.mobile-none').toggleClass("mobile-none__active");
	});


	$(".nav a").on("click", function (e) {
		e.preventDefault();
		var attr = $(this).attr("href");
		var scrollTo = $(attr).offset().top;
		$("html, body").animate({scrollTop: scrollTo}, 500);

	});








			// SLIDER
		var firstSlider = 1;
		var translateWidth = 0;
		var slideInterval = 2000;
		var sliderCount = $(".sliderwrapper").children().length;
		console.log(sliderCount);

		function nextSlide() {
			if  ( firstSlider == sliderCount || firstSlider > sliderCount || firstSlider <= 0) {
				$(".sliderwrapper").css("transform", "translate(0, 0)");
				firstSlider = 1;
			} else {
       			 translateWidth = -$('.viewport').width() * (firstSlider);
        			$('.sliderwrapper').css({
            			'transform': 'translate(' + translateWidth + 'px, 0)'
       					 });
        			firstSlider++;
   				}
		}
		var switchInterval = setInterval(nextSlide, slideInterval);
		$('.viewport').hover(function(){
		        clearInterval(switchInterval);
		},function() {
		        switchInterval = setInterval(nextSlide, slideInterval);
		});

		function prevSlide() {
		    if (firstSlider == 1 || firstSlider <= 0 || firstSlider > sliderCount) {
		        translateWidth = -$('.viewport').width() * (sliderCount - 1);
		        $('.sliderwrapper').css({
		            'transform': 'translate(' + translateWidth + 'px, 0)'
		        });
		        firstSlider = sliderCount;
		    } else {
		        translateWidth = -$('.viewport').width() * (firstSlider - 2);
		        $('.sliderwrapper').css({
		            'transform': 'translate(' + translateWidth + 'px, 0)'
		        });
		        firstSlider--;
		    }
		};

		$('.slide-nav-btn').click(function() {
		        navBtnId = $(this).index();

		        if (navBtnId + 1 != firstSlider) {
		            translateWidth = -$('.viewport').width() * (navBtnId);
		            $('.sliderwrapper').css({
		                'transform': 'translate(' + translateWidth + 'px, 0)'
		            });
		            firstSlider = navBtnId + 1;
		        }
		});

		$(".next-btn").on("click", function () {
			nextSlide();
		});

		$(".prev-btn").on("click", function () {
			prevSlide();
		});

})
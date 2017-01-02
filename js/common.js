$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$(".main").onepage_scroll({
   		sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   		easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
   		                                 // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   		animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   		pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   		updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   		beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   		afterMove: function(index) {
   			if ($('body').attr('class') == "viewing-page-1") {
   				$('.menu li a').css('color','#dbdbdb');
   				$('.social-icons').css('background-color','#fff');
   				$('.social-icons i').css('color','black');

   				$('.menu li a').hover(function() {
   					$( this ).css('color','#ef294e');
   				}, function() {
   					$( this ).css('color','#dbdbdb');
   				});

   			} else {

   				$('.menu li a').hover(function() {
   					$( this ).css('color','#dbdbdb');
   				}, function() {
   					$( this ).css('color','#ef294e');
   				});

   				$('.menu li a').css('color','#ef294e');
   				$('.social-icons').css('background-color','#ef294e');
   				$('.social-icons i').css('color','white');
   			}
   		},   // This option accepts a callback function. The function will be called after the page moves.
   		loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   		keyboard: false,                  // You can activate the keyboard controls
   		responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   		direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
   	});

	$(".main-title a").click(function() {
		$(".main").moveDown();
	});

	$(".main-title-mobile a").click(function() {
		$(".main").moveDown();
	});

	$('.menu li a').hover(function() {
		$( this ).css('color','#ef294e');
	}, function() {
		$( this ).css('color','#dbdbdb');
	});



	// Menu transition
	$('.logo').click(function() {
		$(".main").moveTo(1);
	});

	$('.first-menu').click(function() {
		$(".main").moveTo(1);
	});

	$('.second-menu').click(function() {
		$(".main").moveTo(2);
	});

	$('.third-menu').click(function() {
		$(".main").moveTo(3);
	});

	$('.four-menu').click(function() {
		$(".main").moveTo(4);
	});

	$('.five-menu').click(function() {
		$(".main").moveTo(5);
	});
	// Menu transition end


	 $(".owl-carousel").owlCarousel({
	 	items: 1,
	 	dots: true,
	 	loop: true,
	 });

	 $('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

});

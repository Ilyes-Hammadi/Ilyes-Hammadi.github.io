/*!
    Title: Dev Portfolio Template
    Version: 1.1.1
    Last Change: 03/19/17
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues
    
    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function ($) {


	// Remove no-js class
	$('html').removeClass('no-js');

	// Animate to section when nav is clicked
	$('header a').click(function (e) {
		e.preventDefault();
		var heading = $(this).attr('href');
		var scrollDistance = $(heading).offset().top;

		$('html, body').animate({
			scrollTop: scrollDistance + 'px'
		}, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

		// Hide the menu once clicked if mobile
		if ($('header').hasClass('active')) {
			$('header, body').removeClass('active');
		}
	});

	// Scroll to top
	$('#to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});

	// Scroll to first element
	$('#lead-down span').click(function () {
		var scrollDistance = $('#lead').next().offset().top;
		$('html, body').animate({
			scrollTop: scrollDistance + 'px'
		}, 500);
	});

	// Create timeline
	$('#experience-timeline').each(function () {

		$this = $(this); // Store reference to this
		$userContent = $this.children('div'); // user content

		// Create each timeline block
		$userContent.each(function () {
			$(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
		});

		// Add icons to each block
		$this.find('.vtimeline-point').each(function () {
			$(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
		});

		// Add dates to the timeline if exists
		$this.find('.vtimeline-content').each(function () {
			var date = $(this).data('date');
			if (date) { // Prepend if exists
				$(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
			}
		});

	});

	// Open mobile menu
	$('#mobile-menu-open').click(function () {
		$('header, body').addClass('active');
	});

	// Close mobile menu
	$('#mobile-menu-close').click(function () {
		$('header, body').removeClass('active');
	});


	// When nav bar scroll
	var a = $("#menu").offset().top;

	$(document).scroll(function () {
		if ($(this).scrollTop() > a) {
			$('#menu').css({
				"background": "white",
				"box-shadow": "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
			});

			// Change the links color
			$('header a').css({
				"color": '#3498db'
			})

		} else {
			$('#menu').css({
				"background": "transparent",
				"box-shadow": "0 0 0"
			});

			// Change the links color
			$('header a').mouseenter(function () {
				$(this).css({
					"color": '#3498db'
				})
			}).mouseleave(function () {
				$(this).css({
					"color": 'white'
				})
			})

			$('header a').css({
				"color": 'white'
			})

		}
	});


	$(window).resize(function () {
		console.log($(window).width())

		if ($(this).width() <= 768) {
			// Make menu white
			$('#menu').css({
				"background-color": "white"
			})

			// Change the links color
			$('header a').css({
				"color": '#3498db'
			})

	
			// Change the links color
			$('header a').mouseenter(function () {
				$(this).css({
					"color": '#3498db'
				})
			}).mouseleave(function () {
				$(this).css({
					"color": '#3498db'
				})
			})


		} else {
			if ($(this).scrollTop() > a) {
				$('#menu').css({
					"background": "white",
					"box-shadow": "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
				});

				// Change the links color
				$('header a').css({
					"color": '#3498db'
				})

			} else {
				$('#menu').css({
					"background": "transparent",
					"box-shadow": "0 0 0"
				});

				// Change the links color
				$('header a').mouseenter(function () {
					$(this).css({
						"color": '#3498db'
					})
				}).mouseleave(function () {
					$(this).css({
						"color": 'white'
					})
				})

				$('header a').css({
					"color": 'white'
				})

			}
		}

	})




})(jQuery);

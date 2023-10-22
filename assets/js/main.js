
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);


// Lorsque le bouton pour le français est cliqué (INDEX)
const btn1 = document.getElementById("frenchButton");

if(btn1){
	btn1.addEventListener("click", function() {
		window.location.href = "index.uk.html"; // Remplacez par le chemin de votre page en français
	});
}

// Lorsque le bouton pour l'anglais est cliqué (INDEX)
const btn2 = document.getElementById("englishButton");

if(btn2){
	btn2.addEventListener("click", function() {
		window.location.href = "index.html"; // Remplacez par le chemin de votre page en anglais
	});
}

// Lorsque le bouton pour le français est cliqué (formation)
const btn3 = document.getElementById("frenchButtonFormation") ;
if(btn3){
	btn3.addEventListener("click", function() {
		window.location.href = "formation.uk.html"; // Remplacez par le chemin de votre page en français
	});
}

// Lorsque le bouton pour l'anglais est cliqué (formation)
const btn4 = document.getElementById("englishButtonFormation");
if(btn4){
 	btn4.addEventListener("click", function() {
    	window.location.href = "formation.html"; // Remplacez par le chemin de votre page en anglais
});
}

// Lorsque le bouton pour le français est cliqué (formation)
const btn5 = document.getElementById("frenchButtonExperience");

// Lorsque le bouton pour l'anglais est cliqué (formation)
if(btn5){
	document.getElementById("englishButtonExperience").addEventListener("click", function() {
		window.location.href = "experience-references.html"; // Remplacez par le chemin de votre page en anglais
	});
}

const btn6 = document.getElementById("frenchButtonExperience");
if(btn6){
 	btn6.addEventListener("click", function() {
    	window.location.href = "experience-references.uk.html"; // Remplacez par le chemin de votre page en anglais
});
}

const btn7 = document.getElementById("frenchButtonCompetences");
if(btn7){
 	btn7.addEventListener("click", function() {
    	window.location.href = "competences.uk.html"; // Remplacez par le chemin de votre page en anglais
});
}


const btn8 = document.getElementById("englishButtonCompetences");
if(btn8){
 	btn8.addEventListener("click", function() {
    	window.location.href = "competences.html"; // Remplacez par le chemin de votre page en anglais
});
}


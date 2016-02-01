		function init() {
			window.addEventListener('scroll', function(e){
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
				shrinkOn = 150,
				hideOn = 800,
				header = document.querySelector('header');
				if (distanceY > shrinkOn) {
					classie.add(header, 'smaller');
				} else {
					if (classie.has(header, 'smaller')) {
						classie.remove(header, 'smaller');
					}
				}
				if (distanceY > hideOn) {
					classie.add(header, 'hidden');
				} else {
					if (classie.has(header, 'hidden')) {
						classie.remove(header, 'hidden');
						classie.add(header, 'smaller');
					}
				}
			});
		}
		window.onload = init();
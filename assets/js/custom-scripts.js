
	$.material.init();
	$.material.ripples();

		
/* Masonry Isotope init */
jQuery.noConflict()(function($){


			var $container = $('#container-folio');
					
			if($container.length) {
				$container.waitForImages(function() {
					$(this).slideDown();
					// initialize isotope
					$container.isotope({
					
					  itemSelector : '.box',
					  
					  resizable: false, // disable normal resizing
					 masonry: { columnWidth: $container.width() / 12 }
					});
					
					// filter items when filter link is clicked
					$('#filters a').click(function(){
					  var selector = $(this).attr('data-filter');
					  $container.isotope({ filter: selector });
					  $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
					  
					  return false;
					});
					 
						// update columnWidth on window resize
						$(window).smartresize(function(){
		
							$(window).smartresize(function(){
				  $container.isotope({
					// update columnWidth to a percentage of container width
					masonry: { columnWidth: $container.width() / 12 }
				  }); 
				  
				  });

		});
					
					
					
				},null,true);
				
			}});

		jQuery.noConflict()(function($){	
		
				
		
		 // Basic FitVids Test
        $(".container").fitVids();	

		
		$(function(){



		 $('.scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 500);
				return false;
			  }
			}
		  });
		});
	$(function(){
		$('.lightbox-toggle').on('click', function (event) {
			  event.preventDefault();
			  $('.lightbox').fadeToggle('fast');
				  var content = $(event.currentTarget).attr('data-lightbox-content');
					$('.lightbox-column').append('\n        <div class="lightbox-video">\n        <iframe src="' + content + '" frameborder="0" allowfullscreen> </iframe>\n        </div>\n    ');
				 
				});

				$('.lightbox-close').on('click', function (event) {
				  event.preventDefault();
				  $('.lightbox-column > *').remove();
				});
		});

		// Create a lightbox
		(function() {
			var lightboxGallery = $('body').find('.lightbox-gallery');
			
					if(lightboxGallery.length > 0){
						var $lightbox = $('<div class="lightbox"></div>');
						var $img = $('<img>');
						var $caption = $('<p class="caption"></p>');
						var $body = $('body');
						$($body).append($lightbox);
						$($lightbox).append($img);
						//$($lightbox).append($caption);
						
				// Add image and caption to lightbox
					 $('.lightbox-gallery img').click(function(e) {
						e.preventDefault();
						// Get image link and description
						var src = $(this).attr("src");
						var cap = $(this).attr("alt");

				// Add data to lighbox
						$img.attr('src', src);
						//$caption.text(cap);
						$($body).css('overflow', 'hidden');
						$lightbox.css('overflow', 'auto')
				// Show lightbox
						$lightbox.fadeIn('fast');
						$lightbox.click(function() {
							$lightbox.fadeOut('fast');
							$($body).css('overflow', '');
							
					});
			  });
			}
		}());
	
	});
	
			
		
	
		
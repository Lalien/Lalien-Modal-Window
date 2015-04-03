	jQuery(document).ready(function() {
		jQuery(document).on('click', function(event) {
			var target = jQuery(event.target);
			if (target.hasClass('hidden-video') || target.hasClass('modal-window-trigger') || target.hasClass('youtube-modal-window')) {
				
				jQuery('.hidden-modal').each(function(i, val) {
					var main_index;
					jQuery('.modal-window-trigger').each(function(i, val) {
						if (event.target == val) {
							main_index = i;
						}
					});
					if (target.hasClass('modal-window-trigger')) {
						var modal = jQuery('.hidden-modal').get(main_index);
						var $modal = jQuery(modal);
						$modal.fadeIn();
						$modal.children('video').trigger('play');
					}
				});
			} else {
				jQuery('.hidden-modal').fadeOut();
				jQuery('video').trigger('pause');
			}
		});
	});

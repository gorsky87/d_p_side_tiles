(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.d_p_side_tiles = {
    attach: function (context, settings) {

      // Enable Masonry.
      $(document).ready(function() {
        var $grid = $('.d-side-tiles').masonry({
          itemSelector: '.d-tiles-item',
          columnWidth: '.d-tiles-sizer',
          percentPosition: true,
        });

        $(window).on('load', function(){
          $grid.masonry('layout');
        });

        // Add titles to items.
        $('.d-side-tiles .d-tiles-item').each(function(){
          var alt = $(this).find('img').attr('alt');
          var subalt = '';
          var parts = alt.split('/', 2);
          if (parts.length > 1) {
            alt = parts[0];
            subalt = parts[1];
          }
          var $caption_wrapper = $('<div class="d-tiles-caption"></div>').appendTo($(this));
          var $caption = $('<div></div>').appendTo($caption_wrapper).text(alt);
          if (subalt !== '') {
            $('<small></small>').appendTo($caption).text(subalt);
          }
        });
      });
    }
  };

})(jQuery, Drupal);

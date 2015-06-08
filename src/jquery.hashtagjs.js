/*
 * hashtagjs
 * https://github.com/Varinetz/hashtagjs
 *
 * Copyright (c) 2015 Ruslan Varinetz
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.hashtagjs = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.hashtagjs = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.hashtagjs.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.hashtagjs.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].hashtagjs = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));

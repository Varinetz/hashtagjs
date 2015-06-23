/*
 * hashtagjs
 * https://github.com/Varinetz/hashtagjs
 *
 * Copyright (c) 2015 Ruslan Varinetz
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.hashtagjs = function(options) {
    var str = this.html();
    var re = /(\#\S\w+)/g;
    var socnets = $.hashtagjs.options.socnets;


    this.html(str.replace(re,'<a class="hashtagjs_tag" href="#">$1</a>'));

    $('a.hashtagjs_tag').each(function() {

      var linkholder = $('<div/>', {
                          css: {
                          },
                          class: 'hashtagjs_linkholder'
                        });

      for (prop in socnets) {
      var linkbuild = function() {
        if (prop === true) {
          $('<a/>', {
            class: 'hashtagjs_'+ prop,
            href: 'http://twitter'+this.text()
          }).appendTo(linkholder);
        }
      }
       $(this).after(linkholder);
    };
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
    theme: 'light',
    socnets: {      
      facebook:   true,
      instagram:  true,
      twitter:    true,
      vkontakte:  true
    }
  };

  // Custom selector.
  $.expr[':'].hashtagjs = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));

/*! Selectric Placeholder ϟ v0.2.0 (<%= date %>) - git.io/tjl9sQ - Copyright (c) <%= year %> Leonardo Santos - MIT License */
(function(factory) {
  /* global define */
  if ( typeof define === 'function' && define.amd ) {
    define(['jquery'], factory);
  } else if ( typeof module === 'object' && module.exports ) {
    // Node/CommonJS
    module.exports = function( root, jQuery ) {
      if ( jQuery === undefined ) {
        if ( typeof window !== 'undefined' ) {
          jQuery = require('jquery');
        } else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  'use strict';

  if ( !$.fn.selectric ) {
    $.error('Selectric not initialized');
  }

  $.fn.selectricPlaceholder = function(opts) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('selectric');
      var options = $.extend({
        placeholderOnOpen: true
      }, opts);

      data.elements.label.html(data.$element.attr('placeholder'));

      $this.on('selectric-before-open', function(event, element, data) {
        if ( options.placeholderOnOpen ) {
          if($(element).val().blank()){
            data.elements.label.data('value', data.elements.label.html()).html(data.$element.attr('placeholder'));
          }
        }
      });

      $this.on('selectric-before-close', function(event, element, data) {
        if ( options.placeholderOnOpen ) {
          if($(element).val().blank()){
            data.elements.label.html(data.elements.label.data('value'));
          }
        }
      });

      $this.on('selectric-change', function(event, element, data) {
        if ( options.placeholderOnOpen ) {
          if($(element).val().blank()){
            data.elements.label.data('value', data.elements.label.html()).html(data.$element.attr('placeholder'));
          }
        }
      });

      $this.on('selectric-close', function(event, element, data) {
        if ( options.placeholderOnOpen ) {
          if($(element).val().blank()){
            data.elements.label.data('value', data.elements.label.html()).html(data.$element.attr('placeholder'));
          }
        }
      });
    });
  };
}));
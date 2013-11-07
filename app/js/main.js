require.config({
    paths: {
        jquery: '../_bower_components/jquery/jquery',
        bootstrapAffix: '../_bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../_bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../_bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../_bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../_bower_components/sass-bootstrap/js/collapse',
        bootstrapDropdown: '../_bower_components/sass-bootstrap/js/dropdown',
        bootstrapModal: '../_bower_components/sass-bootstrap/js/modal',
        bootstrapPopover: '../_bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../_bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../_bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../_bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../_bower_components/sass-bootstrap/js/transition',
        requirejs: '../_bower_components/requirejs/require',
        'sass-bootstrap': '../_bower_components/sass-bootstrap/dist/js/bootstrap'
    },
    shim: {
        bootstrapAffix: {
            deps: [
                'jquery'
            ]
        },
        bootstrapAlert: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapButton: {
            deps: [
                'jquery'
            ]
        },
        bootstrapCarousel: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapCollapse: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapDropdown: {
            deps: [
                'jquery'
            ]
        },
        bootstrapModal: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapPopover: {
            deps: [
                'jquery',
                'bootstrapTooltip'
            ]
        },
        bootstrapScrollspy: {
            deps: [
                'jquery'
            ]
        },
        bootstrapTab: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapTooltip: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapTransition: {
            deps: [
                'jquery'
            ]
        }
    }
});

require(['jquery', 'bootstrapAlert', 'bootstrapDropdown', 'bootstrapCollapse', 'bootstrapScrollspy', 'bootstrapAffix'], function ($) {
    'use strict';
    
    // Off-Canvas Navigation Toggle
    $(document).load(function() {
      $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
      });
    });

    // Figure out why these don't fire automatically within bootstrap code

    $(document).ready(function () {
        $('[data-spy="scroll"]').each(function () {
          var $spy = $(this)
          $spy.scrollspy($spy.data())
        })
      })

    $(document).ready(function () {
        $('[data-spy="affix"]').each(function () {
          var $spy = $(this)
          var data = $spy.data()

          data.offset = data.offset || {}

          if (data.offsetBottom) data.offset.bottom = data.offsetBottom
          if (data.offsetTop)    data.offset.top    = data.offsetTop

          $spy.affix(data)
        })
      })

});

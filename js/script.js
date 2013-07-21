/**
 * Load helper functions before require
Modernizr.load([
	{
		load: [
			'js/hlpr/functions.js'
		]
	}
]);
 */

/**
 * Setup Require
 * 
 */
requirejs.config({

      baseUrl: '/js',

      shim: {
        underscore: {
          exports: '_'
        },
        backbone: {
          deps: [
            'jquery',
            'underscore',
            'hlpr/serializeObject'
          ],
          exports: 'Backbone'
        },
        marionette: {
          deps: [
            'backbone'
          ],
          exports: 'Marionette'
        },
        bbvalid: {
          deps: [
            'backbone'
          ],
          exports: 'validation'
        },
        angular : {
          deps : [
            'jquery'
          ]
        }
      },

      paths: {
        view: 'app/views',
        model: 'app/models',
        tmpl: '../tmpl',
        jquery : [
          'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
          'vendor/jquery/jquery.2.0.3.min'
        ],
        functions: 'hlpr/functions',
        underscore: 'vendor/underscore/underscore.1.4.4',
        backbone: 'vendor/backbone/backbone.1.0.0',
        marionette: 'vendor/marionette/backbone.marionette.1.0.3',
        bbvalid: 'vendor/backbone/extra/backbone-validation',
        angular : 'vendor/angular/angular.1.1.5.min'
      }

});

requirejs([
  'functions',
  'marionette'
],
function Bootstrap( Marionette ) {
  'use strict';
});
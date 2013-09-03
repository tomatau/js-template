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
        bootstrap: {
          deps: 'jquery'
        },
        backbone: {
          deps: [
            'vendor/json2',
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
        },
        jqueryui : {
          deps: [
            'jquery'
          ]
        }
      },

      paths: {
        tmpl: '../tmpl',
        style: '../css',
        jquery : [
          'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
          'vendor/jquery/jquery.2.0.3.min'
        ],
        jqueryui: 'vendor/jquery/ui/jquery-ui.1.10.3',
        jqueryui_bs: 'vendor/jquery/ui/',
        functions: 'hlpr/functions',
        bootstrap: 'vendor/bootstrap/bootstrap.3.0.0',
        underscore: 'vendor/underscore/underscore.1.5.1',
        backbone: 'vendor/backbone/backbone.1.0.0',
        marionette: 'vendor/marionette/backbone.marionette.1.1.0',
        bbvalid: 'vendor/backbone/extra/backbone-validation',
        angular : 'vendor/angular/angular.1.1.5.min'
      }

});

requirejs([
  'app/inits',
],
function Bootstrap( MyApp ) {
  'use strict';
  MyApp.start();
});
define([
	'app/app',
	'app/extensions/controller',
	'app/extensions/views.events',
	'app/components/loading/view'
],
function( MyApp ) {
	'use strict';

	MyApp.module('Loading', function( Loading ) {

		Loading.Controller = MyApp.BaseController.extend({
			initialize : function( options ) {
				var loadingView = this.getLoadingView(),
					appView = options.view,
					config = options.config,
					that = this;

				config = ( _.isBoolean(config) ) ? {} : config;

				/**
				 * Do some stuff for different types of loading display
				 */

				_.defaults(config.entities, {
					entities : this.getEntities(appView)
				});

				this.show(loadingView);

				MyApp.execute("when:fetched", config.entities, function( response ) {
					that.show(appView);
				});
			},
			getLoadingView : function() {
				return new Loading.View();
			},
			getEntities : function( view ) {
				return _.chain(view).pick('model', 'collection').toArray().compact().value();
			}
		});
	});

	MyApp.commands.setHandler("show:loading", function( view, options ) {
		options.view = view;
		new MyApp.Loading.Controller({
			view: options.view,
			region: options.region,
			config: options.loading
		});
	});
});
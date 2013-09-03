define([
	'app/extensions/application',
	'functions'
],
function() {
	'use strict';

	var MyApp = new Marionette.Application();

	// make history
	MyApp.on("initialize:after", function( options ) {
		if ( Backbone.history ){
			Backbone.history.start({
				pushState: false
			});
		}
		var defaultRoute = MyApp.request("default:route");
		if ( Backbone.history.fragment === "" && defaultRoute !== "" ) {
			// nav to default route
			Backbone.history.navigate(defaultRoute);
		}
	});

	MyApp.commands.setHandler('register:instance', function( instance, instanceId ){
		MyApp.register(instance, instanceId);
	});

	MyApp.commands.setHandler('unregister:instance', function( instanceId ){
		MyApp.unregisterInstance(instanceId);
	});

	// trigger callback on complete
	// entities needs to be an array
	MyApp.commands.setHandler("when:fetched", function( entities, callback ) {
		var xhrs = _.invoke([entities], 'fetch');
		$.when.apply($, xhrs).done(function( json, state, xhr ) {
			return callback(entities);
		});
	});

	return MyApp;
});
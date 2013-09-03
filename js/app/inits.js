define([
	'app/app',
	'app/config',
	'app/components/loading/controller'
	// 'app/components/dialog/region'
],
function( MyApp, config ) {
	'use strict';

	/**
	 *	Initialize File
	 */
	// setup regions
	var regions = {
		mainRegion			: "#main"
		// dialogRegion		: MyApp.Dialog.Region.extend({
		//	el: "#dialog"
		// })
	};

	/////////////////////////////
	// setup the initializers //
	/////////////////////////////
	MyApp.addInitializer(function( options ) {
		// should start the chat app so we can look for existing chats
	});


	MyApp.addRegions(regions);

	MyApp.reqres.setHandler("default:region", function(){
		return MyApp.mainRegion;
	});

	////////////////////
	// ROUTING SETUP //
	////////////////////
	MyApp.Router =  Marionette.AppRouter.extend({
		appRoutes : config.appRoutes
	});

	MyApp.on("initialize:before", function( options ) {
		new MyApp.Router({
			controller : config.API
		});
	});

	// setup the default route
	MyApp.reqres.setHandler("default:route", function(){
		return config.API.defaultRoute;
	});

	return MyApp;
});
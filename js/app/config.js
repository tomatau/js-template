define([
	'app/app'
	//  controllers here
],
function( MyApp ) {
	'use strict';

	var appRoutes = {
		''		: 'home'
	};

	var API = {

		defaultRoute: "home",

		home: function () {},

	};

	return {
		appRoutes	: appRoutes,
		API			: API
	};
});
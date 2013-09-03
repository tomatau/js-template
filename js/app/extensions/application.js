define([
	'marionette'
],
function() {
	'use strict';

	_.extend(Marionette.Application.prototype, {

		navigate: function( route, options ){
			options = options || {};
			Backbone.history.navigate(route, options);
		},

		register: function( instance, instanceId ) {
			this._registry = this._registry || {};
			this._registry[instanceId] = instance;
		},

		unregisterInstance: function( instanceId ) {
			delete this._registry[instanceId];
		},

		resetRegistry: function( ) {
			var oldCount = this.getRegistrySize(),
				msg,
				newcount;
			_.each(this._registry, function( instance, key ){
				instance.region.close();
			});
			newCount = this.getRegistrySize();
			msg = "There are " + newCount + " controllers out of " + oldCount;
			if ( newCount > 0 ) {
				console.warn(msg, this._registry);
			} else {
				console.log(msg);
			}
		},

		getRegistrySize: function() {
			_.size(this._registry);
		}
	});
});
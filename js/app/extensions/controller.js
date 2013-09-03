define([
	'app/app'
],
function( MyApp ) {
	'use strict';

	MyApp.BaseController = Marionette.Controller.extend({

		constructor: function( options ) {
			options = options || {};
			this.region = options.region || MyApp.request("default:region");
			Marionette.Controller.prototype.constructor.call(this, options);
			// register with App
			this._instanceId = _.uniqueId('controller');
			MyApp.execute("register:instance", this, this._instanceId);
		},

		close: function( ) {
			delete this.options;
			delete this.region;
			MyApp.execute("unregister:instance", this._instanceId);
			Marionette.Controller.prototype.close.call(this, arguments);
		},

		show: function( view, options ){
			_.defaults(options || (options = {}), {
				loading: false,
				region: this.region
			});

			this.listenTo(view, "close", this.close);

			this._manageView(view, options);
		},

		_manageView: function( view, options ) {
			if ( options.loading ) {
				MyApp.execute("show:loading", view, options);
			} else {
				options.region.show(view);
			}
		}
	});
});
define([
	'app/app',
	'text!tmpl/components/loading.html',
	'vendor/spinjs/spin.1.3'
],
function( MyApp, loading, Spinner ) {
	'use strict';

	MyApp.module('Loading', function( Loading ) {

		Loading.View = Marionette.ItemView.extend({
			template	: _.template(loading),

			onShow: function(){
				var options = this.getOptions();
				// this.$el.spin(options);
				this.spinner = new Spinner(options).spin(this.el);
			},

			onClose: function(){
				this.spinner.stop();
			},

			getOptions: function(){
				return {
					lines: 7, // The number of lines to draw
					length: 5, // The length of each line
					width: 10, // The line thickness
					radius: 10, // The radius of the inner circle
					corners: 1, // Corner roundness (0..1)
					rotate: 0, // The rotation offset
					direction: 1, // 1: clockwise, -1: counterclockwise
					color: '#000', // #rgb or #rrggbb
					speed: 1, // Rounds per second
					trail: 60, // Afterglow percentage
					shadow: false, // Whether to render a shadow
					hwaccel: false, // Whether to use hardware acceleration
					className: 'spinner', // The CSS class to assign to the spinner
					zIndex: 2e9, // The z-index (defaults to 2000000000)
					top: '10px', // Top position relative to parent in px
					left: 'auto' // Left position relative to parent in px
				};
			}
		});
	});
});
define([
	'app/app',
	'jqueryui',
	'css!jqueryui_bs/jquery-ui.1.10.0.custom.css'
],
function( MyApp ) {
	'use strict';

	MyApp.module('Dialog', function( Dialog ){
		Dialog.Region = Marionette.Region.extend({
			dialogSettings : {
				title: "Edit Dialog",
				modal: true,
				resizable: false,
				width: 'auto'
			},

			onShow : function( view ) {
				var options = this.getDefaultOptions( _.result(view, "dialog") );
				this.$el.dialog(options);
				this.listenTo(MyApp.vent, "close:dialog", this.close);
			},

			getDefaultOptions : function( options ) {
				options = options || {};
				return _.defaults(options, this.dialogSettings, {
					close: this.close.bind(this)
				});
			},

			onClose : function(){
				this.stopListening();
				this.$el.dialog('destroy');
			}
		});
	});
});
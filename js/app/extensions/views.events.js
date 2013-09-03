define([
	'marionette'
],
function() {
	'use strict';

	_.extend(Marionette.CollectionView.prototype, {
		_initialEvents : function(){
			this.once('show', function() {
				if ( this.collection ) {
					this.listenTo(this.collection, "add", this.addChildView, this);
					this.listenTo(this.collection, "remove", this.removeItemView, this);
					this.listenTo(this.collection, "reset", this.render, this);
				}
			}, this);
		}
	});

	_.extend(Marionette.CompositeView.prototype, {
		_initialEvents : function(){
			this.once('show', function() {
				if ( this.collection ) {
					this.listenTo(this.collection, "add", this.addChildView, this);
					this.listenTo(this.collection, "remove", this.removeItemView, this);
					this.listenTo(this.collection, "reset", this.render, this);
				}
			}, this);
		}
	});
});
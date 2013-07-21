/**
 *	View Helper Functions 
 */

define(['vendor/dateformat.js'], function() {
	'use strict';

	var viewHelpers = {
		// check if a field is defined
		isset: function(field) {
			return ( this[field] != undefined );
		},
		// log
		log: function(field) {
			return log(field);
		},
		/**
		 * Requires date format
		 */
		nice_date: function(date) {
			if (date == null || date === "") return "";
			return (new Date(date.split(" ")[0])).format("M dS, Y");
		},
		/**
		 * Display a select element
		 * @param  {int} selected the key of the selected item
		 * @param  {array} options  available options
		 * @return {string}	the select element
		 */
		get_options: function(selected, options) {
			var ret = "", current = "";
			_.each(options, function(v, k){
				current = ( k === selected ) ? ' selected="selected"' : '';
				ret = ret + '<option' + current + ' value="' + k + '">' + v + "</option>";
			});
			return ret;
		}
	};

	return viewHelpers;
});
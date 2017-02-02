/**!
 * Util Angular service
 * @author  Mike Goodstadt  <mikegoodstadt@gmail.com>
 * @version 0.0.1
 *
 * Module which deals with Color
 *
 */
(function() {
	'use strict';
	/**
	 * @ngdoc service
	 * @name Utils
	 * @module generic
	 * @description
	 * Generic javascript utilities.
	 *
	 */
	angular
		.module('generic')
		.factory('Utils', Utils);

	function Utils() {
		return {
			/**
			 * @ngdoc method
			 * @name generic.service:Utils#whatIsIt
			 *
			 * @description
			 * A function that detrmines the type of object being passed.
			 * http://stackoverflow.com/a/11183002/1667410
			 *
			 * @param {Object} value to be returned.
			 * @returns {string} description of object type
			 * [ null | undefined | String | Array | Object | don't know ].
			 */
			whatIsIt: function(object) {
				var stringConstructor = "test".constructor;
				var arrayConstructor = [].constructor;
				var objectConstructor = {}.constructor;
				if (object === null) {
					return "null";
				}
				else if (object === undefined) {
					return "undefined";
				}
				else if (object.constructor === stringConstructor) {
					return "String";
				}
				else if (object.constructor === arrayConstructor) {
					return "Array";
				}
				else if (object.constructor === objectConstructor) {
					return "Object";
				}
				else {
					return "don't know";
				}
			}
		};
	}
})();
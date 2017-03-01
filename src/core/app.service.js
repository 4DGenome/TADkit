    (function() {
	'use strict';
	/**
	 * @ngdoc service
	 * @name App
	 * @module TADkit
	 * @description Load app and initialize.
	 *
	 * @requires https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
	 * @requires https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
	 * @requires https://github.com/3DGenomes/angular-threejs
	 * @requires https://github.com/3DGenomes/angular-d3js
	 * @requires TADkit.Settings
	 * @requires TADkit.Components
	 * @requires TADkit.Init
	 */
	angular
		.module('TADkit')
		.factory('App', App);

	function App($log, $q, THREEService, THREETextures, d3Service, Settings, Components, Init) {

		/**
		 * @ngdoc method
		 * @name TADkit.App#load
		 * @kind function
		 *
		 * @description
		 * Loads app configuration and components.
		 * Waits for promise.
		 *
		 * @requires THREEService
		 * @requires d3Service
		 * @requires TADkit.Settings
		 * @requires TADkit.Components
		 * @requires THREETextures
		 *
		 * @returns {Array} Results of all as promise.
		 */
		function load() {
			$log.debug("Dependencies loading...");

			// Load JS API dependencies
			var three = THREEService.load(); // results[0]
			var d3 = d3Service.load(); // results[1]

			// Load TADKit configuration
			var settings = Settings.load(); // results[2]
			var components = Components.load(); // results[3]

			return $q.all([three, d3, settings, components])
			.then(function(results) {
				$log.debug("Dependencies loaded OK!");
				
				// Load default App textures from Settings
				THREETextures.load(results[2].textures);
				return results;
			});
		}


		/**
		 * @ngdoc method
		 * @name TADkit.App#init
		 * @kind function
		 *
		 * @description
		 * Inits app configuration and components.
		 * Waits for promise.
		 *
		 * @returns {Array} Results of all as promise.
		 */
		function init() {

			var defaults = Init.defaults();

			return $q.all([defaults])
			.then(function(results) {
				return results;
			});
		}

		return function() {
			$log.log("TADkit loading...");

			return load()
			.then(init)
			.then(function() {
				$log.log("TADkit loaded OK!");
			});
		};

	}
})();
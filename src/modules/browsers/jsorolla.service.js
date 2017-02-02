/**!
 * Genome Maps https://genomemaps.org
 * Jsorolla genome-viewer https://github.com/opencb/jsorolla
 * @author  Mike Goodstadt  <mikegoodstadt@gmail.com>
 * @version 0.0.1
 */
(function() {
	'use strict';
	/**
	 * @ngdoc service
	 * @name JsorollaService
     * @module browsers
	 * @description
	 * Service loading JSorolla for Track management
	 *
	 * @requires https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
	 * @requires https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
	 *
	 */
	angular
		.module('browsers')
		.factory('JsorollaService', JsorollaService);

	function JsorollaService($log, $q, Files) {
		return {
			/**
			 * @ngdoc method
			 * @name JsorollaService#load
			 * @kind function
			 *
			 * @description
			 * A function that loads the files required to initialize and run OpenCB Jsorolla API.
			 * Uses $q.all to ensure all are loaded before returning.
			 * Currently only loads the Genome Viewer component.
			 *
			 * @returns {Array} results of appending the files.
			 * [ null | undefined | String | Array | Object | don't know ].
			 */
			load: function() {
				$log.log("OpenCB Jsorolla Genome Viewer loading...");

				var assetsPath = "assets/js/genome-viewer/";

				var resources = [];
				resources.push(assetsPath + "vendor/fontawesome/css/font-awesome.min.css");
				resources.push(assetsPath + "vendor/qtip2/jquery.qtip.min.css");
				resources.push(assetsPath + "styles/css/style.css");
				resources.push(assetsPath + "vendor/underscore/underscore-min.js");
				resources.push(assetsPath + "vendor/backbone/backbone.js");
				resources.push(assetsPath + "vendor/jquery/dist/jquery.min.js");
				resources.push(assetsPath + "vendor/qtip2/jquery.qtip.min.js");
				resources.push(assetsPath + "vendor/uri.js/src/URI.min.js");
				resources.push(assetsPath + "gv-config.js");
				resources.push(assetsPath + "genome-viewer.js");

				var appendResources = [];
				angular.forEach(resources, function(filename, key) {
					appendResources.push(Files.appendToHTML(filename));
				});

				return $q.all(appendResources)
				.then(function(results) {
					$log.debug(results);
					$log.log("OpenCB Jsorolla Genome Viewer loaded OK!");
					return results;
				});
			}
		};
	}
})();
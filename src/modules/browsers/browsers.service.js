/**!
 * Browsers Angular service for Genome Browser selection
 * @author  Mike Goodstadt  <mikegoodstadt@gmail.com>
 * @version 0.0.1
 *
 * Module which loads the specified browser API
 *
 */
(function() {
	'use strict';
	/**
	 * @ngdoc service
	 * @name browsers.service:BrowsersService
	 * @description
	 * Service loading Browser APIs for Track management
	 *
	 * @requires https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
	 * @requires https://code.angularjs.org/1.3.16/docs/api/ng/service/$document
	 * @requires https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
     * @requires Files
	 *
	 */
	angular
		.module('browsers')
		.factory('BrowsersService', BrowsersService);

	function BrowsersService($log, $document, $q, Files) {

        var browsers = {
            
          [
            {},
            {},
            {},
            
            ]  
        };
            ["TADkit", "Genoverse", "IGVjs", "JSorolla", "BioDalliance", "jBrowse"];
        
        var defaults = {
            "browser": "default",
            "container": "browser",
            "layout": {
                "width": 100,
                "height": 100,
                "padding": 10
            },
            "reference": {
                "species": "human",
                "ucscID": "hg19",
                "fastaURL": "",
                "cytobandURL": ""
            },
            "region": {
                "startChrom": "X",
                "startCoord": 0,
                "endChrom": "X",
                "endCoord": 1000
            },
            "tracks": [],
            "style": {
                "color": "#333333",
                "background": "#fff",
                "palette": ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841"],
            }
        }
        
        return {
            /**
			 * @ngdoc function
			 * @name Browsers.service:Browsers#init
			 * @methodOf Browsers.service:Browsers
			 * @kind function
			 *
			 * @description
			 * Loads available browsers from file.
			 * Waits for promise.
			 *
			 * @requires $log
			 * @requires $q
			 * @requires $http
			 *
			 * @returns {Object} Browsers as promise.
			 */
			init: function() {
				var deferred = $q.defer();
				var dataUrl = "browsers.json";
				if( browsers.length > 0 ) {
					 deferred.resolve(browsers);
				} else {
					$http.get(dataUrl)
					.success( function(data) {
						browsers = data;
						$log.debug("Browsers (" + data.length + ") loaded from " + dataUrl);
						deferred.resolve(browsers);
					});
				}
				return deferred.promise;
			},
            
			/**
			 * @ngdoc function
			 * @name browsers.service:BrowsersService#load
			 * @methodOf browsers.service:BrowsersService
			 * @kind function
			 *
			 * @description
			 * A function that initializes the specified browser API with the supplied config.
			 * Uses $q.all to ensure all are loaded before returning.
             *
             *** Available browsers library located...
             *** Each browser have list of assets...
             *** Each browser list own special config params...
             *** Service loads assets, configures and runs...
			 *
			 * @returns {Array} results of appending the files.
			 * [ null | undefined | String | Array | Object | don't know ].
			 */
			load: function(config) {
                config = config || {};
                angular.extend(this, angular.copy(defaults), config);

                $log.log("Browser loading...");
                var browser = Browsers.getBrowser(this.browser);
                
				var resources = [];
				angular.forEach(browser.assets, function(asset, key) {
                    resources.push(browser.path + asset);
				});                

				var appendResources = [];
				angular.forEach(resources, function(filename, key) {
					appendResources.push(Files.appendToHTML(filename));
				});
//				appendResources.push(Files.loadConfig(configFile));

				return $q.all(appendResources)
				.then(function(results) {
					$log.debug(results);
					$log.log(this.browser + " Browser loaded OK!");
					return results;
				});
			}
		};
	}
})();
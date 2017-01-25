(function() {
	'use strict';
	/**
	 * @ngdoc directive
	 * @name TADkit.directive:tkComponentBrowser
	 * @restrict E
	 *
	 * @description
	 * Genome track browser directive
     * Generates tracks using the user specified browser
     * (see Browsers module)
	 *
	 * @example
	 * `<div tk-component-track-browser></div>`
	 *
	 */
	angular
		.module('TADkit')
		.directive('tkComponentBrowser', tkComponentBrowser);

	function tkComponentBrowser($log, BrowserService) {
		return {
			restrict: 'E',
			templateUrl: 'assets/templates/browser.html',
			link: function(scope, element, attrs) {
                
 				var component = element[0].parentNode;
				var componentWidth = component.clientWidth - (2 * componentMargin) - margin.left - margin.right,
					componentHeight = trackHeight - margin.top - margin.bottom;

                var config = {
                    // browser: "default",
                    container : element[0].firstElementChild.id,
                    layout : {
                        width : componentWidth,
                        height : componentHeight,
                        padding : scope.component.view.settings.padding,
                    },
                    reference : {
                        species : scope.component.view.viewpoint.species,
                        // ucscID: "hg19",
                        // fastaURL: "",
                        // cytobandURL: ""
                    },
                    region : {
                        chromsome : scope.component.view.viewpoint.chromsome,
                        chromStart : scope.component.view.viewpoint.chromStart,
                        chromEnd : scope.component.view.chromEnd
                    },
                    // tracks: [],
                    style: {
                        color: scope.component.view.settings.color,
                        background: scope.component.view.settings.background,
                        palette: scope.component.view.settings.palette
                    }
                }

                BrowserService.load(config).then(function() {
						$log.info("Genome track browser loaded");
				});
			}
		};
	}
})();
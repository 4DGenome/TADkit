(function() {
	'use strict';
	angular
		.module('TADkit')
		.directive('tkDataImport', tkDataImport);

	function tkDataImport($log, $parse) {		
		return {
			restrict: 'A',
			scope: {
				tkDataImport : "&",
				filetitle : "="
			},
			link: function(scope, element, attrs) {
				element.on('change', function(e) {
					var reader = new FileReader();
					reader.onload = function(e) {
						scope.$apply(function() {
							$log.debug("Fetching Import results....");
							scope.tkDataImport({$fileContent:e.target.result});
						});
					};
					reader.readAsText((e.srcElement || e.target).files[0]);
					scope.filetitle = (e.srcElement || e.target).files[0].name;
				});
			}
		};
	}
})();
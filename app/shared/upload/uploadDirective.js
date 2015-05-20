var hack = angular.module('hackDirectives', []);

hack.directive("dropzone", function($rootScope) {
	  return {
        restrict : "A",
        scope: {
            uploaded: '='
        },
        link: function (scope, elem, attr) {
            elem.bind('dragover', function(evt) {
                evt.stopPropagation();
                evt.preventDefault();
                evt.dataTransfer.dropEffect = 'copy';
            });
            elem.bind('drop', function(evt) {
                evt.stopPropagation();
                evt.preventDefault();

                var file = evt.dataTransfer.files;
                $rootScope.$broadcast('upload', file[0]);
            });
        }
    }
});
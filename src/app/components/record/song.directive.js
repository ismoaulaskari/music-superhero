MyApp.directive('song', function (NoteService) {
    return {
        scope: true,
        template: "<b>{{ songText }}</b>",
        replace: true,
        link: function (scope, el, attrs) {

            scope.$watch(function(){ 
                return NoteService.song[NoteService.song.length - 1];
            }, function(newValues) {
                scope.songText = (newValues);
            }, true);
        }
    };
});
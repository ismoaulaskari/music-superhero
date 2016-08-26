MyApp.directive("song", function (NoteService, $timeout) {
  return {
    scope: true,
    template: "<b>{{ songText }}</b>",
    replace: true,
    link(scope, el, attrs) {
//
//            scope.$watch(function(){
//                return NoteService.lastSound;
//            }, function(newValues) {
//                scope.songText = (newValues);
//            }, true);
      var updateText = function () {
        scope.songText = NoteService.lastSound;
        $timeout(function () {
          updateText();
        }, 500);
      };
      updateText();
    },
  };
});

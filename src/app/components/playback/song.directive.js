MyApp.directive("song", function (NoteService, $timeout) {
  return {
    scope: true,
    template: "<b>{{ songText }}</b>",
    replace: true,
    link: function (scope, el, attrs) {
//  didn't work
//            scope.$watch(function(){
//                return NoteService.lastSound;
//            }, function(newValues) {
//                scope.songText = (newValues);
//            }, true);
      var updateText = function () {
        if (scope.recorder.status !== "stopped") {
          scope.songText = NoteService.lastSound; //don't know why this won't work with a getter function
        }
        $timeout(function () {
          updateText();
        }, 500);
      };
      updateText();
    },
  };
});

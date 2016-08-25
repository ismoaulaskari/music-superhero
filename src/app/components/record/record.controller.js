MyApp.controller("RecordController", ['$scope', 'RecordService', 'NoteService', function ($scope, RecordService, NoteService) {
//    $scope.$on('newNote', function (event, arg) {
//      $scope.recorder = {};
//      $scope.recorder.note = 'got your ' + arg;
//    });

    $scope.recorder = {};
    $scope.recorder.song = NoteService.getSong();

    $scope.toggleRecord = function () {
      $scope.recorder = {};
      // $scope.recorder.status = "foo";
      $scope.recorder.status = RecordService.toggle();
    }

    $scope.pitchData = function () {
      return RecordService.logPitch();
    }

//    // watch the service for changes
//    $scope.$watchCollection(noteSource, function (current, previous) {
//      $scope.recorder.song = NoteService.getSong();
//    });

    var noteSource = function () {
      return NoteService.getSong();
    }

  }]);

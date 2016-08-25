MyApp.controller("RecordController", ['$scope', 'RecordService', 'NoteService', function ($scope, RecordService, NoteService) {
//    $scope.$on('newNote', function (event, arg) {
//      $scope.recorder = {};
//      $scope.recorder.note = 'got your ' + arg;
//    });

    this.noteData = NoteService.getLastNoteData();

    $scope.toggleRecord = function () {
      $scope.recorder = {};
      // $scope.recorder.status = "foo";
      $scope.recorder.status = RecordService.toggle();
    }

    $scope.pitchData = function () {
      return RecordService.logPitch();
    }

    // watch the service for changes
    $scope.$watch(noteSource, function (current, previous) {
      this.noteData = current;
    });

    var noteSource = function () {
      return NoteService.getLastNoteData();
    }

  }]);

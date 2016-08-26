MyApp.controller("PlaybackController", ['$scope', 'NoteService', 'RecordService', function ($scope, NoteService, RecordService) {
    $scope.sheet = {};
    $scope.sheet.song = NoteService.getSong();
    
    $scope.play = function () {
      console.log("Starting play");
      //RecordService.play(NoteService.getSong());
    }
  }]);

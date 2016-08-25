MyApp.controller("RecordController", ['$scope', 'RecordService', '$location', function ($scope, RecordService, $location) {
    $scope.toggleRecord = function () {
      $scope.recorder = {};
      // $scope.recorder.status = "foo";
      $scope.recorder.status = RecordService.toggle();
    }

    $scope.pitchData = function () {
      return RecordService.logPitch();
    }

    $scope.reloadPage = function () {
      $location.path('/intro');
    }
  }]);

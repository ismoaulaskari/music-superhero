//MyApp.controller("RecordController", function($scope, RecordService) {
//  $scope.toggleRecord = function($scope, RecordService) {
//    $scope.status = RecordService.toggleRecord();    
//  }
//})
MyApp.controller("RecordController", function ($scope) {
  $scope.toggleRecord = function () {
    $scope.recorder = {};
    $scope.recorder.status = "foo";
  }
})

MyApp.controller("RecordController", ['$scope', 'RecordService', function ($scope, RecordService) {
  $scope.toggleRecord = function () {
    $scope.recorder = {};
   // $scope.recorder.status = "foo";
    $scope.recorder.status = RecordService.toggle();
  }
}]);
//MyApp.controller("RecordController", ['$scope', 'ApiService', function ($scope, ApiService) {
//  $scope.toggleRecord = function () {
//    $scope.recorder = {};
//   // $scope.recorder.status = "foo";
//    $scope.recorder.status = ApiService.syncMethod();
//  }
//}]);
//MyApp.controller("RecordController", function ($scope) {
//  $scope.toggleRecord = function () {
//    $scope.recorder = {};
//    $scope.recorder.status = "foo";
//  }
//})

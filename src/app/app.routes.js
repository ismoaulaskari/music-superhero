var MyApp = angular.module("MyApp", ["ui.router"]);

MyApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("main", {
      url: "/",
      templateUrl: "templates/main/main.html",
      controller: "MainController",
      controllerAs: "main",
    })
    .state("main.record", {
      url: "record",
      templateUrl: "templates/record/record.html",
      controller: "RecordController",
      controllerAs: "rec",
    })
    .state("main.login", {
      url: "login",
      templateUrl: "templates/login/login.html",
    })
    .state("main.playback", {
      url: "playback",
      templateUrl: "templates/playback/playback.html",
      controller: "PlaybackController",
      controllerAs: "play",
    });
});

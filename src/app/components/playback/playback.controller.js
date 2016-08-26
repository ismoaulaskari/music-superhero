MyApp.controller("PlaybackController", ['$scope', 'NoteService', 'RecordService', function ($scope, NoteService, RecordService) {
    $scope.sheet = {};
    $scope.sheet.song = NoteService.getSong();

    $scope.play = function () {
      console.log("Starting play");
      RecordService.play(NoteService.getSong());
    }

    $scope.noteGen = function () {
      console.log("Making sheet");
      var vf = new Vex.Flow.Factory({
        renderer: {selector: 'boo', width: 500, height: 200}
      });

      var score = vf.EasyScore();
      var system = vf.System();

      system.addStave({
        voices: [
          score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
          score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
        ]
      }).addClef('treble').addTimeSignature('4/4');

      vf.draw();
    }
  }]);

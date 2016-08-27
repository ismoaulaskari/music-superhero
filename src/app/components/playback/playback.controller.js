MyApp.controller("PlaybackController", ["$scope", "NoteService", "RecordService", function ($scope, NoteService, RecordService) {
    $scope.sheet = {};
    $scope.sheet.song = NoteService.getSong();

    $scope.play = function () {
//      console.log("Starting play");
      RecordService.play(NoteService.getSong());
    };

    $scope.noteGen = function () {
//      console.log("Making sheet");

      var vf = new Vex.Flow.Factory({
        renderer: {selector: "boo", width: 500, height: 200},
      });

      var score = vf.EasyScore();
      var system = vf.System();

      var notes = NoteService.convertToVexflowNotes(NoteService.getSong(), 60);
      console.log("notes is " + notes);
      system.addStave({
        voices: [
                    score.voice(score.notes(notes, {stem: "up"})),
//          score.voice(score.notes(notes, {stem: "up"})),
                 //  score.voice(score.notes("C#4/h, C#4", { stem: "down" })),
        ],
      }).addClef("treble").addTimeSignature("4/4");

      vf.draw();
    };
  }]);

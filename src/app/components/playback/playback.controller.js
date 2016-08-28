MyApp.controller("PlaybackController", ["$scope", "NoteService", "RecordService", function ($scope, NoteService, RecordService) {
    $scope.sheet = {};
    $scope.sheet.song = NoteService.getSong();

    $scope.play = function () {
//      console.log("Starting play");
      RecordService.play(NoteService.getSong());
    };

    $scope.noteGen = function () {
      VF = Vex.Flow;
      var notes = NoteService.convertToVexflowNotes(NoteService.getSong(), 60);
      console.log("notes is " + notes);

// Create an SVG renderer and attach it to the DIV element named "boo".
      var div = document.getElementById("boo")
      var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
      renderer.resize(500, 200);
      var context = renderer.getContext();
      context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
      var stave = new VF.Stave(10, 40, 400);

// Add a clef and time signature.
      stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
      stave.setContext(context).draw();

      // Create a voice in 4/4 and add above notes
      var voice = new VF.Voice({num_beats: 4, beat_value: 4});
      voice.setStrict(false); //will be "too many ticks"-error without this
      voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
      var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

// Render voice
      voice.draw(context, stave);

    };

  }]);

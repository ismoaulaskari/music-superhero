MyApp.service("RecordService", ["$log", function ($log) {
    var self = this;
    self.running = false;
    self.voice = new Wad({source: "mic"});
    self.tuner = new Wad.Poly();
    self.tuner.add(self.voice);

    self.toggle = function () {
      if (self.running) {
        self.running = false;
        self.stop();
        return "stopped";
      } else {
        self.running = true;
        self.start();
        return "started";
      }
      return "unknown";
    };

    self.start = function () {
      self.voice.play();
      self.tuner.updatePitch(); // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.
      self.logPitch();
    };

    // log in the background, recording just keeps on going
    self.logPitch = function () {
      $log.log({pitch: self.tuner.pitch, note: self.tuner.noteName});
      if (self.running) {
        requestAnimationFrame(self.logPitch);
      }      
    };
    // logPitch();
// If you sing into your microphone, your pitch will be logged to the console in real time.
    self.stop = function () {
      self.tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.
      self.voice.stop();
      self.voice.stop();
    };

    self.play = function (song) {
      console.log("play")      
      for (var i = 0; i < song.length; i++) {
        var note = song[i];        
        if (typeof note.note !== "undefined" && note.length > 0) {
          console.log("playing" + note.note + " for " + note.length);
          self.tuner.play({
            volume: 0.5,
            wait: 0, // Time in seconds between calling play() and actually triggering the note.
            loop: false, // This overrides the value for loop on the constructor, if it was set.
            pitch: note.note, // A4 is 440 hertz.
            label: note.note // A label that identifies this note.         
          });
        }
      }
    };
  }]);


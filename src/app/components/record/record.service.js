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
      var player = makePiano();
      for (var i = 0; i < song.length; i++) {
        var note = song[i];
        if (typeof note.note !== "undefined" && note.length > 0) {
          console.log("playing" + note.note + " for " + note.length);
          player.play({
            volume: 0.5,
            
            
            //wait: 0.5, // Time in seconds between calling play() and actually triggering the note.
            //   loop: false, // This overrides the value for loop on the constructor, if it was set.
            pitch: note.note, // A4 is 440 hertz.
            label: note.note // A label that identifies this note.         
          });
        }
      }
      player.stop();
    };

    var makePiano = function () {
      return new Wad({
        source: 'square',
        env: {
          attack: .01,
          decay: .005,
          sustain: 1,
          hold: .5,
          release: .3
        },
        filter: {
          type: 'lowpass',
          frequency: 1200,
          q: 8.5,
          env: {
            attack: .2,
            frequency: 600
          }
        }
      })

      var makeFlute = function () {
        return new Wad({
          source: 'square',
          env: {
            attack: .015,
            decay: .002,
            sustain: .5,
            hold: 2.5,
            release: .3
          },
          filter: {
            type: 'lowpass',
            frequency: 600,
            q: 7,
            env: {
              attack: .7,
              frequency: 1600
            }
          },
          vibrato: {
            attack: 8,
            speed: 8,
            magnitude: 100
          }
        })

      }

    }
  }]);


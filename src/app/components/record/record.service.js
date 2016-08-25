MyApp.service("RecordService", function () {
  var self = this;
  self.running = false;
  self.voice = new Wad({source: 'mic'});
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
  }

  self.start = function () {
    self.voice.play();
    self.tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.
    self.logPitch();
  };

  self.logPitch = function () {
    console.log(self.tuner.pitch, self.tuner.noteName)
    requestAnimationFrame(self.logPitch)
  };
  //logPitch();
// If you sing into your microphone, your pitch will be logged to the console in real time.
  self.stop = function () {
    self.tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.
    self.voice.stop();
  };

  self.playDemo = function () {

  }


});


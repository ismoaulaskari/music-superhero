MyApp.service("RecordService", function () {
  this.running = false;
  this.voice = new Wad({source: 'mic'});
  this.tuner = new Wad.Poly();
  this.tuner.add(this.voice);

  this.toggle = function () {
    if (this.running) {
      this.running = false;
      this.stop();
      return "stopped";
    } else {
      this.running = true;
      this.start();
      return "started";
    }
    return "unknown";
  }

  this.start = function () {
    this.voice.play();
    this.tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.
    this.logPitch();
  };

  this.logPitch = function () {
    console.log(this.tuner.pitch, this.tuner.noteName)
    requestAnimationFrame(logPitch)
  };
  //logPitch();
// If you sing into your microphone, your pitch will be logged to the console in real time.
  this.stop = function () {
    this.tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.
    this.voice.stop();
  };

  this.playDemo = function () {

  }


});


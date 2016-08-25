MyApp.service("RecordService", function () {
  var running = false;
  var voice = new Wad({source: 'mic'});
  var tuner = new Wad.Poly();
  tuner.add(voice);

  var toggleRecord = function () {
    if(running) {
      running = false;
      stop();
      return "stopped";
    }
    else {
      running = true;
      start();
      return "started";
    }
  }

  var start = function () {
    voice.play();
    tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.
    logPitch();
  };

  var logPitch = function () {
    console.log(tuner.pitch, tuner.noteName)
    requestAnimationFrame(logPitch)
  };
  //logPitch();
// If you sing into your microphone, your pitch will be logged to the console in real time.
  var stop = function () {
    tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.
    voice.stop();
  };

  this.record = function () {
  }

  this.playDemo = function () {

  }

})


MyApp.service("NoteService", [function () {
    var self = this;
    self.lastNote;
    self.lastNoteTime = new Date();
    self.lastNoteLength;
    self.lastSound;
    self.song = [];

    self.newNote = function (newNote) {
      self.lastNote = newNote.note;
      var now = new Date();
      self.lastNoteLength = (now - self.lastNoteTime);
      self.lastNoteTime = now;
      self.lastSound = {note: self.lastNote, length: self.lastNoteLength};
      self.song.push(self.lastSound);
      //console.log(self.lastSound);
    };

    self.getSong = function () {
      return self.song;
    };


    self.getLastNoteData = function () {
//      console.log("GETTING note: " + self.lastNote + ", length: " + self.lastNoteLength);
      return {note: self.lastNote, length: self.lastNoteLength};
    };

    //$bpm = 60; $bpm <= 179; a minute is 60 * 1000 ms., a qarter note is 1000ms in 60bpm in 4/4 
    var toVexflowNoteLength = function (millisec, bpm) {
      var preF = "/";
      var postF = ",";
      if (millisec > 0 && bpm > 0) {
        return preF + q + postF;
        if (millisec / bpm > 60)
          return preF + "w" + postF;
        if (millisec / bpm > 30)
          return preF + "h" + postF;
        if (millisec / bpm > 15)
          return preF + "q" + postF;
        if (millisec / bpm > 7)
          return preF + "8" + postF;
        if (millisec / bpm > 3)
          return preF + "16" + postF;
      }
      return ", "; //undefined
    };

    self.convertToVexflowNotes = function (song, bpm) {
      var notes = "";
      var currentNote;
      var currentTime = 0;
      for (var i = 0; i < song.length; i++) {
        var note = song[i];
        console.log(note);
        //console.log("note=" + note.note + " len=" + note.length);
        if (note.note && note.length >= 0) {
          if (currentNote !== note.note) { //pitch changed
            notes = notes + currentNote + toVexflowNoteLength(currentTime);
            currentNote = note.note;
            currentTime = note.length;
          } else { //pitch continues
            currentTime = currentTime + note.length;
          }
        } else { //no note detected
          notes = notes + "b4" + "/qr, "; //rest 
        }
      }
      return notes;
    };

  }]);


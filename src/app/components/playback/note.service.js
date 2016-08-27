MyApp.service("NoteService", [function () {
    var self = this;
    self.lastNote;
    self.lastNoteTime = new Date();
    self.lastNoteLength;
    self.lastSound;
    self.song = new Array("start");

    self.newNote = function (newNote) {
      self.lastNote = newNote.note;
      var now = new Date();
      self.lastNoteLength = (now - self.lastNoteTime);
      self.lastNoteTime = now;
      self.lastSound = {note: self.lastNote, length: self.lastNoteLength};
      self.song.push(self.lastSound);
      //  console.log("SONG: " + self.song + ", length: " + self.song.length);
    };

    self.getSong = function () {
      console.log("song: " + self.song + ", length: " + self.song.length);
      return self.song;
    };


    self.getLastNoteData = function () {
      console.log("GETTING note: " + self.lastNote + ", length: " + self.lastNoteLength);
      return {note: self.lastNote, length: self.lastNoteLength};
    };

    //$bpm = 60; $bpm <= 179; a minute is 60 * 1000 ms., a qarter note is 1000ms in 60bpm in 4/4 
    var toVexflowNoteLength = function (millisec, bpm) {
      if (millisec && bpm) {
        if (millisec / bpm > 60)
          return ":w";
        if (millisec / bpm > 30)
          return ":h";
        if (millisec / bpm > 15)
          return ":q";
        if (millisec / bpm > 7)
          return ":8";
        if (millisec / bpm > 3)
          return ":16";
      }
      return undefined;
    }

    self.convertToVexflowNotes = function (song, bpm) {
      var notes = [];
      var currentNote;
      var currentTime = 0;
      for (var note in song) {
        if (note.note) {
          if (currentNote !== note.note) { //pitch changed
            notes.add(currentNote + toVexflowNoteLength(currentTime));
            currentNote = note.note;
            currentTime = note.length;
          } else { //pitch continues
            currentTime = currentTime + note.length;
          }
        } else { //no note detected
          notes.push("b/4" + ":qr"); //rest 
        }
      }
    };

  }]);


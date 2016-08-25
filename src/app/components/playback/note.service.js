MyApp.service("NoteService", [ function () {
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
    }

    self.getSong = function () {
      console.log("song: " + self.song + ", length: " + self.song.length);
      return self.song;
    }


    self.getLastNoteData = function () {
      console.log("GETTING note: " + self.lastNote + ", length: " + self.lastNoteLength);
      return {note: self.lastNote, length: self.lastNoteLength}
    }
  }]);


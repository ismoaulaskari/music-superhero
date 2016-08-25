MyApp.service("NoteService", [ function () {
    var self = this;
    self.lastNote;
    self.lastNoteTime = new Date();
    self.lastNoteLength;
    self.song = new Array("start");

    self.newNote = function (newNote) {
//      console.log(newNote);
      self.lastNote = newNote.note;
      var now = new Date();
      self.lastNoteLength = (now - self.lastNoteTime);
      self.lastNoteTime = now;
      //console.log("note: " + self.lastNote + ", length: " + self.lastNoteLength);
      self.song.push({note: self.lastNote, length: self.lastNoteLength});
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


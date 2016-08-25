MyApp.service("NoteService", [ function () {
    var self = this;
    self.lastNote;
    self.lastNoteTime = new Date();
    self.lastNoteLength;

    self.newNote = function (newNote) {
      console.log(newNote);
      self.lastNote = newNote.noteName;
      var now = new Date();
      self.lastNoteLength = (now - self.lastNoteTime);
      self.lastNoteTime = now;
      console.log("note: "+self.lastNote+", length: "+self.lastNoteLength);
    }
    
    self.getLastNoteData = function () {
      console.log("GETTING note: "+self.lastNote+", length: "+self.lastNoteLength);
      return {note: self.lastNote, length: self.lastNoteLength}
    }
  }]);


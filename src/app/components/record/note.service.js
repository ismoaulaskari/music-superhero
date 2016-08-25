MyApp.service("NoteService", [ function () {
    var self = this;
    self.lastNote;
    self.lastNoteTime = new Date();

    self.newNote = function (newNote) {
      self.lastNote = newNote.noteName;
      var now = new Date();
      var noteLength = (now - self.lastNoteTime);
      self.lastNoteTime = now;
      //('newNote', {note: self.lastNote, length: noteLength});
    }
  }]);


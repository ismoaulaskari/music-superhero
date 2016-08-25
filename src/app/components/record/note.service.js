MyApp.service("NoteService", ['$rootScope', '$broadcast', function ($rootScope, $broadcast) {
    var self = this;
    self.lastNote;
    self.lastNoteTime = new Date();

    self.newNote = function (newNote) {
      self.lastNote = newNote.noteName;
      var now = new Date();
      var noteLength = (now - self.lastNoteTime);
      self.lastNoteTime = now;
      $rootScope.$broadcast('newNote', {note: self.lastNote, length: noteLength});
    }
  }]);


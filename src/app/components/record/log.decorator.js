MyApp.config(function($provide) {
  $provide.decorator('$log', function($delegate, $sniffer, NoteService) {
        var _log = $delegate.log; //Saving the original behavior

        $delegate.log = function(message) { NoteService.newNote(message) };
//        $delegate.error = function(message) {
//            alert(message);
//        }

        return $delegate;
    });
})


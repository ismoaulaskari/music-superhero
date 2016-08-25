MyApp.config(function($provide) {
  $provide.decorator('$log', function($delegate, $sniffer, NoteService) {
        var _log = $delegate.log; //Saving the original behavior

        //we want to log to a service instead of just the console
        $delegate.log = function(message) { NoteService.newNote(message) };
                
//        $delegate.error = function(message) {
//            alert(message);
//        }

        return $delegate;
    });
})


MyApp.config(function($provide) {
  $provide.decorator('$log', function($delegate, $sniffer) {
        var _log = $delegate.log; //Saving the original behavior

 //       $delegate.log = function(message) { alert(message); };
//        $delegate.error = function(message) {
//            alert(message);
//        }

        return $delegate;
    });
})


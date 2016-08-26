MyApp.service("ApiService", function ($http) {
  this.syncMethod = function () {
    return 0;
  };

  this.getItems = function () {
    return $http.get(window.env.API_URL + "/item")
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (err) {
        console.error("Error ApiService getItems ", err);
        return {};
      });
  };
});

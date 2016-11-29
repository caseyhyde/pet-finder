myApp.controller('CatsController', ['$http', function($http) {
  console.log("CatsController is running");

  var self = this;

  self.animal = {};
  self.bio = "";

  self.getPets = function() {

    var key = 'b761170291866ae591ecc8236454cc89'
    var query = 'http://api.petfinder.com/';
    query += 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&format=json';
    query += '&output=basic';
    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request)
      .then(function(response) {
        console.log(response);
        self.animal = response.data.petfinder.pet;
      });

    getBio();

    function getBio() {
      $http.get('/sentencer')
        .then(function(response) {
          self.bio = response.data;
          console.log(self.bio);
        })
    }
  }
}]);

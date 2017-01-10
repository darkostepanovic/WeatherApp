//SERVICES
weatherApp.service('cityService', function() {
    
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather = function(city, days) {
        
       var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=52d3259ecb42d1fe8a8bbc19fcf6d475", { 
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

       return weatherAPI.get({ q: city, cnt: days }); 
    }
    
}]);
var APIKey = "371dead36e8c5b8aa978441fa4daca9a"
var city = ""

https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=371dead36e8c5b8aa978441fa4daca9a&units=imperial

var getCity = function () {
    var city = $('#cityInput').val();
    localStorage.setItem("city", city);
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey + "&units=imperial";
    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayCity(data);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};

var displayCity = function (data) {
    $('#cityTitle');
};

$("#init").click(function(event){
    event.preventDefault();
    getCity();
})
var APIKey = "371dead36e8c5b8aa978441fa4daca9a"

var getDrink = function () {
    var liquor = $('#liquor option:selected').val();
    localStorage.setItem("liquor", liquor);
    var APIKey = '71dead36e8c5b8aa978441fa4daca9a' + liquor;
    fetch(APIKey)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var drinks = data.drinks;
                    displayDrink(drinks);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};
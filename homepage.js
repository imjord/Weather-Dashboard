// dom variables 

var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-name")









// api key 
var key = "d3c64dccaec48cbde6a3412c1da5a3ec";




var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);


    var cityName = cityInputEl.value.trim();

    // if(cityName) {
        
    // } else {

    // }

  };



  userFormEl.addEventListener("submit", formSubmitHandler);


function weatherBoi(lat,lon) {

    var weatherApi = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`);


    // make a request to the url 

    fetch(weatherApi).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    })
    
}




function storage(){

}


// load .



// weatherBoi("33","45");
// dom variables 

var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-name")
var myButton = document.querySelector("button");








// api key 
var key = "d3c64dccaec48cbde6a3412c1da5a3ec";


// add event listener 

var myApiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value}&appid=${key}`





myButton.addEventListener("click", function(event){
    event.preventDefault();
    fetch(myApiCall).then(response => response.json()).then(data => console.log(data)).catch(err => alert("Wrong city name"));
})





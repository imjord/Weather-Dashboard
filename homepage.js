// dom variables 

var userFormEl = $("#user-form");
var cityInputEl = $("#city-name")
var myButton = $("button");








// api key 
var key = "5eb7d8eaa2f23d433771db6d9ffdd905";


// add event listener 







$("button").click(function(event){
    event.preventDefault();
    var myApiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.val()}&appid=${key}`
    console.log(cityInputEl.val())
    fetch(myApiCall).then(response => response.json()).then(data => console.log(data)).catch(err => alert("Wrong city name"));
})





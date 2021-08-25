// dom variables 

var userFormEl = $("#user-form");
var cityInputEl = $("#city-name")
var myButton = $("button");
var forTitle = $("#forecast-title");
var forText = $(".forcast-text");
var tempText = $(".temp")
var searchHistory = [];
var searchList = $("#search-history");






// api key 
var key = "5eb7d8eaa2f23d433771db6d9ffdd905";


// add event listener 







$("button").click(function(event){
    event.preventDefault();
    var myApiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputEl.val()}&appid=${key}`
    console.log(cityInputEl.val())
    forTitle.html(` Forcast for ${cityInputEl.val()}`)
    searchHistory.push(cityInputEl.val())
    fetch(myApiCall).then(response => response.json()).then(data => {
        console.log(data)

        tempValue = data["list"]['0']['main']['temp'];

        tempText.html("Tempature " + tempValue);

    }).catch(err => alert("Wrong city name"));

    localStorage.setItem("search", JSON.stringify(searchHistory))
    appendHistory();
   
})


function appendHistory(){
    localStorage.getItem("search", searchHistory)

     for(i = 0; i < searchHistory.length; i++) {
        
        searchList.append("<li>"+ searchHistory[i]  + "</li>")
        

     }
  
   

}





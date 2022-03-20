// dom variables 

var userFormEl = $("#user-form");
var cityInputEl = $("#city-name")
var myButton = $("button");
var forTitle = $("#forecast-title");
var forText = $(".forcast-text");
var tempText = $(".temp")
var weatherEl = $(".weather")
var windEl = $(".wind")
var searchHistory = [];
var searchList = $("#search-history");
var forcastDay = $(".day");






// api key 
var key = "5eb7d8eaa2f23d433771db6d9ffdd905";


// add event listener 







$("button").click(function(event){
    event.preventDefault();
    var myApiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputEl.val()}&appid=${key}&units=imperial`
    console.log(cityInputEl.val())
    forTitle.html(` Forcast for ${cityInputEl.val()}`)
    searchHistory.push(cityInputEl.val())

    fetch(myApiCall).then(response => response.json()).then(data => {
        console.log(data)

        tempValue = data["list"]['0']['main']['temp'];
        weatherValue = data["list"]['0']['weather']['0'].description;
        windValue = data["list"]['0']['wind'].speed;
        dayValue = data['list']["0"].dt_txt;

        tempText.html("Tempature " + tempValue);
        weatherEl.html("Weather  " + weatherValue);
        windEl.html("wind speed " + windValue);
        forcastDay.html("Date " + dayValue);

    }).catch(err => alert("Wrong city name"));

    localStorage.setItem("search", JSON.stringify(searchHistory))
   
    
    appendHistory();
    getStorage();
   
})


function appendHistory(){
   

    
    searchList.append("<li>"+ searchHistory[searchHistory.length -1]  + "</li>")
  
    

    // localStorage.setItem("search", JSON.stringify(searchHistory))

    // localStorage.getItem("search", searchHistory[])

    //  for(i = 0; i < searchHistory.length; i++) {
        
    
        

    //  }
  
   

}


function getStorage(){
    

    var storedText = localStorage.getItem("search");
    
  if(storedText == null){
      return console.log("nothing in storage")
  } else {
      return console.log("something in storage.")
  }


}




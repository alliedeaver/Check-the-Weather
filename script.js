const APIkey = "&appid=a75d1c1614487542633dbd2b37ef9cec";

const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
//make the call using the fetch(queryURL) function 

// need to define a variable for the 5 day forecast 

const queryURLday = "https://api.openweathermap.org/data/2.5/weather?q=";


const userInput = document.querySelector("#userInput");
const searchEl = document.querySelector(".search");



function searchFunction(event) {
    const city = userInput.value;
    const fetchqueryURLday = queryURLday + city + "&units=Imperial" + APIkey;

    fetch(fetchqueryURLday)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            // displayWeather(data for current day);
            console.log(data);
            const city = document.querySelector(".current-city");
            const icon = document.querySelector(".current-icon");
            const temp = document.querySelector(".current-temp");
            const wind = document.querySelector(".current-wind");
            const humid = document.querySelector(".current-humidity");

            city.textContent = data.name;
            icon.src = setIcon(data.weather[0].icon);
            temp.textContent = "temp: " + data.main.temp + "\xB0" + "F";
            wind.textContent = "wind: " + data.wind.speed + "m/h";
            humid.textContent = "humidity: " + data.main.humidity + "%";

        });
}

function setIcon(code) {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
}


function searchFunction2(event) {
    const city = userInput.value;
    const fetchqueryURL = queryURL + city + "&units=Imperial" + APIkey;

    fetch(fetchqueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //display 5 day forecast 


            console.log(data);
            const forecast = data.list
            const date1 =document.querySelector(".date1");
            const icon1 = document.querySelector(".icon1");
            const temp1 = document.querySelector(".temp1");
            const wind1 = document.querySelector(".wind1");
            const humidity1 = document.querySelector(".humidity1");


            date1.textContent = data.list[0].dt_txt.slice(5,10);
            icon1.src = setIcon(data.list[0].weather[0].icon);
            temp1.textContent = "temp: " + forecast[0].main.temp + "\xB0" + "F";
            wind1.textContent = "wind: " + forecast[0].wind.speed + "m/h";
            humidity1.textContent = "humidity: " + forecast[0].main.humidity + "%";



            const date2 =document.querySelector(".date2");
            const icon2 = document.querySelector(".icon2");
            const temp2 = document.querySelector(".temp2");
            const wind2 = document.querySelector(".wind2");
            const humidity2 = document.querySelector(".humidity2");


            date2.textContent = data.list[7].dt_txt.slice(5,10);
            icon2.src = setIcon(data.list[7].weather[0].icon);
            temp2.textContent = "temp: " + forecast[7].main.temp + "\xB0" + "F";
            wind2.textContent = "wind: " + forecast[7].wind.speed + "m/h";
            humidity2.textContent = "humidity: " + forecast[7].main.humidity + "%";



            const date3 =document.querySelector(".date3");
            const icon3 = document.querySelector(".icon3");
            const temp3 = document.querySelector(".temp3");
            const wind3 = document.querySelector(".wind3");
            const humidity3 = document.querySelector(".humidity3");


            date3.textContent = data.list[15].dt_txt.slice(5,10);
            icon3.src = setIcon(data.list[15].weather[0].icon);
            temp3.textContent = "temp: " + forecast[15].main.temp + "\xB0" + "F";
            wind3.textContent = "wind: " + forecast[15].wind.speed + "m/h";
            humidity3.textContent = "humidity: " + forecast[15].main.humidity + "%";


            const date4 =document.querySelector(".date4");
            const icon4 = document.querySelector(".icon4");
            const temp4 = document.querySelector(".temp4");
            const wind4 = document.querySelector(".wind4");
            const humidity4 = document.querySelector(".humidity4");


            date4.textContent = data.list[23].dt_txt.slice(5,10);
            icon4.src = setIcon(data.list[23].weather[0].icon);
            temp4.textContent = "temp: " + forecast[23].main.temp + "\xB0" + "F";
            wind4.textContent = "wind: " + forecast[23].wind.speed + "m/h";
            humidity4.textContent = "humidity: " + forecast[23].main.humidity + "%";



            const date5 =document.querySelector(".date5");
            const icon5 = document.querySelector(".icon5");
            const temp5 = document.querySelector(".temp5");
            const wind5 = document.querySelector(".wind5");
            const humidity5 = document.querySelector(".humidity5");



            date5.textContent = data.list[31].dt_txt.slice(5,10);
            icon5.src = setIcon(data.list[31].weather[0].icon);
            temp5.textContent = "temp: " + forecast[31].main.temp + "\xB0" + "F";
            wind5.textContent = "wind: " + forecast[31].wind.speed + "m/h";
            humidity5.textContent = "humidity: " + forecast[31].main.humidity + "%";



        });
}

function submitHandler(event){
        event.preventDefault();
        searchFunction();
        searchFunction2();
}


searchEl.addEventListener("submit", submitHandler); {
    

let citySearches = document.querySelector(".city-searches")
let searchHistory = JSON.parse(localStorage.getItem
    ("citySearches")) || [] 
    searchHistory.push(citySearches);
    localStorage.setItem("citySearches", JSON.stringify(searchHistory)); 


let historyButton = document.createElement("button");
historyButton.textContent = citySearches
historyButton.classList.add("btn", "rounded",
"btn-outline-secondary","primary", "mb-1");
historyButton.addEventListener("click", function (event){
    searchFunction(event.target.textContent);
    searchFunction2(event.target.textContent);
})
document.querySelector(".city-searches").append(historyButton);

};



const apiKey = "";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

// API URL -- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

cityname = document.querySelector(".content-input input");
buttonEvent = document.querySelector(".content-input button");

async function checkWeather(cityname)
{
    const response = await fetch (apiurl+"&q="+cityname+"&appid="+apiKey);
    const data  = await response.json();
    if(response.status != 404){
        document.querySelector('.result-card').style.display = 'flex';
        document.querySelector('.error-response').style.display = 'none';

        document.querySelector('#city-name').innerHTML = data.name.toUpperCase()+","+data.sys.country;
        document.querySelector('#city-temperature').innerHTML = data.main.temp+"°C";
        document.querySelector('#city-desc').innerHTML = data.weather[0].description;
        document.querySelector('#min-max-temp').innerHTML =data.main.temp_min+" | "+data.main.temp_max;
    }
    else{
        document.querySelector('.result-card').style.display = 'none';
        document.querySelector('.error-response').style.display = 'flex';
        console.log("City Not found");
    }
    //document.querySelector("city-name").innerHTML = data.name+","+data.sys.country;
}

buttonEvent.addEventListener("click",()=>{
    checkWeather(cityname.value);
});

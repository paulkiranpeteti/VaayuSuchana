const apiKey = "f41b0b0ca0ed26d20eb46bb1e4cf37d3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?"

// API URL -- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

cityname = document.querySelector(".content-input input");
buttonEvent = document.querySelector(".content-input button");

async function checkWeather(cityname)
{
    const response = await fetch (apiurl+"q="+cityname+"&appid="+apiKey);
    const data  = await response.json();
    console.log(data.name);
}

buttonEvent.addEventListener("click",()=>{
    checkWeather(cityname.value);
});

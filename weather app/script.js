document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const getWeatherInfo = document.getElementById("weather-info");
    const CityNameDisplay = document.getElementById("city-name");
    const teampratureDisplay = document.getElementById("temprature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY="f9379270edfce9964d5a633e93ab95a3";

    getWeatherBtn.addEventListener('click', async()=>{
        const city=cityInput.value.trim();
        if(!city)return;

        try {
            const weatherData= await fetchWeatherData(city);
            displayWeatherData(weatherData);
            
        } catch (error) {
            showerror();
            
        }

        

    })
    async function fetchWeatherData(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response= await fetch(url);
        console.log(typeof response);
        console.log(response);

        if(!response.ok){
          throw new Error("city not found"); 
          console.error("Not found") 
        }
        const data=await response.json()
        return data;
    }
    function displayWeatherData(data){
        console.log(data);
        const {name,main,weather}=data;
        CityNameDisplay.textContent=name;
        teampratureDisplay.textContent=`Teamprature:${main.temp}`;
        descriptionDisplay.textContent=`Weather:${weather[0].description}`;
        //unlock the display
        getWeatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        

    }
    function showerror(){
        getWeatherInfo.classList.remove('hidden');
        errorMessage.classList.remove('hidden');
    }
})
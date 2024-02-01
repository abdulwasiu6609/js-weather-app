const apiKey = "18d647c835c819cf0c3739a74c6ad515";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

        const searchBox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")
        const weatherIcon = document.querySelector(".weather-icon")


        async function checkWeather(city) {
            const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
            let data = await response.json();

            if (response.status == 404) {
                document.querySelector(".weather").style.display = "none";
             document.querySelector(".error").style.display = "block";
            } else {
                document.querySelector(".city").innerHTML = data.name;
             document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
             document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
             document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

             switch (data.weather[0].main) {
                case "Clouds":
                    weatherIcon.src = "images/clouds.png";
                    break;
             
                case "Clear":
                    weatherIcon.src = "images/clear.png";
                    break;
             
                case "Rain":
                    weatherIcon.src = "images/rain.png";
                    break;
             
                case "Drizzle":
                    weatherIcon.src = "images/drizzle.png";
                    break;
             
                case "Mist":
                    weatherIcon.src = "images/mist.png";
                    break;
             
             }

             document.querySelector(".weather").style.display = "block"
             document.querySelector(".error").style.display = "none"
        }
            }         

        searchBtn.addEventListener("click", ()=> {
          checkWeather(searchBox.value)  
        })
        
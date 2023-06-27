let cityName = document.getElementById('city-name');
let countryName = document.getElementById('contry-name');
let temperature = document.getElementById('temperature');
let humidity = document.getElementById('Humidity');
let clouds = document.getElementById('Clouds');
let wind = document.getElementById('Wind');
let weatherType = document.getElementById('weather-type');
let weatherImg = document.getElementById("weather-img");

navigator.geolocation.getCurrentPosition((location) => {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            cityName.innerHTML = res.name;
            countryName.innerHTML = res.sys.country;
            temperature.innerHTML = `${Math.floor(res.main.temp)}°C`;
            weatherType.innerHTML = res.weather[0].main;
            humidity.innerHTML = `${Math.floor(res.main.humidity)}%`;
            clouds.innerHTML = `${res.clouds.all}%`;
            wind.innerHTML = `${res.wind.speed} km/h`;


            // Thumder storm
            if (res.weather[0].id <= 232 && res.weather[0].id >= 200) {
                weatherImg.innerHTML = `<img src="image/scattered-thunderstorms.png" alt="thunderstorm" class="weather-image">`;
            }
            // Drizzle
            else if (res.weather[0].id >= 300 && res.weather[0].id <= 321) {
                weatherImg.innerHTML = `<img src="image/rain.png" alt="drizzle" class="weather-image">`;
            }
            // Rain
            else if (res.weather[0].id >= 500 && res.weather[0].id <= 531) {
                weatherImg.innerHTML = `<img src="image/rain.png" alt="Rain" class="weather-image">`;
            }
            // Snow
            else if (res.weather[0].id >= 600 && res.weather[0].id <= 621) {
                weatherImg.innerHTML = `<img src="image/snow.png" alt="Snow" class="weather-image">`;
            }
            // Mist
            else if (res.weather[0].id == 701) {
                weatherImg.innerHTML = `<img src="image/mist.png" alt="Mist" class="weather-image">`;
            }
            // Smoke
            else if (res.weather[0].id == 711) {
                weatherImg.innerHTML = `<img src="image/smoke.png" alt="Smoke" class="weather-image">`;
            }
            // Haze
            else if (res.weather[0].id == 721) {
                weatherImg.innerHTML = `<img src="image/haze.png" alt="Haze" class="weather-image">`;
            }
            // Dust
            else if (res.weather[0].id == 731 || res.weather.id == 761 || res.weather.id == 751) {
                weatherImg.innerHTML = `<img src="image/dust.png" alt="Dust" class="weather-image">`;
            }
            // Fog
            else if (res.weather[0].id == 741) {
                weatherImg.innerHTML = `<img src="image/smoke.png" alt="Fog" class="weather-image">`;
            }
            // Tornado
            else if (res.weather[0].id == 781) {
                weatherImg.innerHTML = `<img src="images/tornado.svg" alt="Tornado" class="weather-image">`;
            }
            // Clouds
            else if (res.weather[0].id >= 801 && res.weather[0].id <= 804) {
                weatherImg.innerHTML = `<img src="image/cloudy.png" alt="Clouds" class="weather-image">`;
            }
            // Clear
            else {
                weatherImg.innerHTML = `<img src="image/clear-sky.png" alt="cloudy-wether-img" class="weather-image">`;
            }





        })
        .catch((rej) => {

        })
})


let userLocation = document.getElementById('city');
let onSearch = () => {
    if (userLocation.value.trim()) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
            .then((res) => res.json())
            .then((res) => {
                if (res.name) {


                    cityName.innerHTML = res.name;
                    countryName.innerHTML = res.sys.country;
                    temperature.innerHTML = `${Math.floor(res.main.temp)}°C`;
                    weatherType.innerHTML = res.weather[0].main;
                    humidity.innerHTML = `${Math.floor(res.main.humidity)}%`;
                    clouds.innerHTML = `${res.clouds.all}%`;
                    wind.innerHTML = `${res.wind.speed} km/h`;


                    // Thumder storm
                    if (res.weather[0].id <= 232 && res.weather[0].id >= 200) {
                        weatherImg.innerHTML = `<img src="image/scattered-thunderstorms.png" alt="thunderstorm" class="weather-image">`;
                    }
                    // Drizzle
                    else if (res.weather[0].id >= 300 && res.weather[0].id <= 321) {
                        weatherImg.innerHTML = `<img src="image/rain.png" alt="drizzle" class="weather-image">`;
                    }
                    // Rain
                    else if (res.weather[0].id >= 500 && res.weather[0].id <= 531) {
                        weatherImg.innerHTML = `<img src="image/rain.png" alt="Rain" class="weather-image">`;
                    }
                    // Snow
                    else if (res.weather[0].id >= 600 && res.weather[0].id <= 621) {
                        weatherImg.innerHTML = `<img src="image/snow.png" alt="Snow" class="weather-image">`;
                    }
                    // Mist
                    else if (res.weather[0].id == 701) {
                        weatherImg.innerHTML = `<img src="image/mist.png" alt="Mist" class="weather-image">`;
                    }
                    // Smoke
                    else if (res.weather[0].id == 711) {
                        weatherImg.innerHTML = `<img src="image/smoke.png" alt="Smoke" class="weather-image">`;
                    }
                    // Haze
                    else if (res.weather[0].id == 721) {
                        weatherImg.innerHTML = `<img src="image/haze.png" alt="Haze" class="weather-image">`;
                    }
                    // Dust
                    else if (res.weather[0].id == 731 || res.weather.id == 761 || res.weather.id == 751) {
                        weatherImg.innerHTML = `<img src="image/dust.png" alt="Dust" class="weather-image">`;
                    }
                    // Fog
                    else if (res.weather[0].id == 741) {
                        weatherImg.innerHTML = `<img src="image/smoke.png" alt="Fog" class="weather-image">`;
                    }
                    // Tornado
                    else if (res.weather[0].id == 781) {
                        weatherImg.innerHTML = `<img src="images/tornado.svg" alt="Tornado" class="weather-image">`;
                    }
                    // Clouds
                    else if (res.weather[0].id >= 801 && res.weather[0].id <= 804) {
                        weatherImg.innerHTML = `<img src="image/cloudy.png" alt="Clouds" class="weather-image">`;
                    }
                    // Clear
                    else {
                        weatherImg.innerHTML = `<img src="image/clear-sky.png" alt="cloudy-wether-img" class="weather-image">`;
                    }

                    userLocation.value = "";

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })

                    userLocation.value = "";
                }


            })
            .catch((rej) => {

            })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Enter City Name!',
            
        })
    }

}
// document.onkeydown = function (e) {
//     if (event.keyCode == 13) {
//         if (userLocation.value.trim() === "") {
//             new swal(`Enter a city name Karachi etc`);
//         }

//         console.log(e.keyCode)
//     }else{
        
//     }
// }

const apiKey = "d7abb5e8c603fa467ae7ba6725571b70"

document.addEventListener('DOMContentLoaded', () => {

    let input = document.getElementById("zip");
    const button = document.getElementById("zipSubmit");
    const weatherBox = document.getElementById("weatherBox");
    button.addEventListener('click', () => {
        weatherBox.classList.add('openWeatherBox');
        let msg = document.querySelector('.msg');
        let weatherPic = document.getElementById('weatherPic');
        let zip = input.value.trim();
        let countryCode = 'us';
        let temps = document.getElementById('temps');
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${apiKey}&units=imperial`;

        //check for valid zipcode
        function isValidZip(zip) {
            return /^\d{5}(-\d{4})?$/.test(zip);
        };

        if (!isValidZip(zip)) {
            msg.innerText = "Please enter a valid ZIP code (e.g., 12345 or 12345-6789).";
            input.value = "";
            return;
        }

        //call api
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // convert wind angle to direction    
                function getWindDir(angle) {
                    const directions = ['↓ North', '↙ NE', '← East', '↖ SE', '↑ South', '↗ SW', '→ West', '↘ NW'];
                    return directions[Math.round(angle / 45) % 8];
                };
                //catch bad input that passes regex    
                if (data.cod !== 200) {
                    msg.innerText = "Could not find weather for that zipcode, Please check and try again!";
                    return;
                }

                // get data from api response    
                let city = document.getElementById('city');
                let temp = Math.trunc(data.main.temp);
                let feelsLike = Math.trunc(data.main.feels_like);
                let location = data.name;
                let description = data.weather[0].description;
                let windSpeed = Math.trunc(data.wind.speed);
                let windDir = getWindDir(data.wind.deg);
                // message contents    
                city.innerText = location;
                temps.innerText = temp + "°F / " + feelsLike + "°F";

                msg.innerText = description + " with " + windSpeed + " Mph " + " winds out of the " + windDir;

                weatherPic.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                input.value = '';

            });


    });
});

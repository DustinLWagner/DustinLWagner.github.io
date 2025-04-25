
const apiKey = "d7abb5e8c603fa467ae7ba6725571b70"


document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById("zip");
    const button = document.getElementById("zipSubmit");
    const weatherBox = document.getElementById("weatherBox");
    button.addEventListener('click', () => {
        console.log('clicked submit');
        weatherBox.classList.add('openWeatherBox');
        let msg = document.querySelector('.msg');
        let weatherPic = document.getElementById('weatherPic');
        let zip = input.value;
        let countryCode = 'us';
        let temps = document.getElementById('temps');

        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${apiKey}&units=imperial`;
        console.log('Zip code entered:', zip);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                function getWindDir(angle) {
                    const directions = ['↓ N', '↙ NE', '← E', '↖ SE', '↑ S', '↗ SW', '→ W', '↘ NW'];
                    return directions[Math.round(angle / 45) % 8];
                };

                let temp = Math.trunc(data.main.temp);
                let feelsLike = Math.trunc(data.main.feels_like);

                let location = data.name;
                let description = data.weather[0].description;
                let windSpeed = Math.trunc(data.wind.speed);
                let windDir = getWindDir(data.wind.deg);

                city.innerText = location;
                temps.innerText = temp + "°F / " + feelsLike + "°F";


                msg.innerText = description + " and " + windDir + " " + windSpeed + " Mph " + " winds. ";

                weatherPic.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                input.value = '';

            });


    });
});

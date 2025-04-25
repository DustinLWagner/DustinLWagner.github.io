
const apiKey = "d7abb5e8c603fa467ae7ba6725571b70"


document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById("zip");
    const button = document.getElementById("zipSubmit");

    button.addEventListener('click', () => {
        console.log('clicked submit');
        let msg = document.querySelector('.msg');
        let weatherPic = document.getElementById('weatherPic');
        let zip = input.value;
        let countryCode = 'us';

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

                let city = data.name;
                let description = data.weather[0].description;
                let windSpeed = Math.trunc(data.wind.speed);
                let windDir = getWindDir(data.wind.deg);

                msg.innerText = " It is " + temp + "°F" + " in " + city + " right now and feels like " + feelsLike + "°F" + " with " + description + " and " + windDir + " " + windSpeed + " Mph " + " winds. ";

                weatherPic.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                input.value = '';
            });


    });
});
/*

wind: 
deg: 140
speed: 3.44

"The weather in " + city + " right now is " + temp + "°F" + " and feels like " feelsLike + "°F" + " and it is " + description + " outside.";


msg.innerText = "Weather in " + city + " right now is " + description + " and it is " + temp + "°F " + " and feels like " + feelsLike + "°F" + " outside.";
*/
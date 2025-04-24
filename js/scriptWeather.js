/* openweathermap API key = d7abb5e8c603fa467ae7ba6725571b70
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${apiKey}`;



*/


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
                let temp = Math.trunc(data.main.temp)
                let city = data.name
                let description = data.weather[0].description
                msg.innerText = "Weather in " + city + " is " + description + " and it is " + temp + "°F";
                weatherPic.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                input.value = '';
            });


    });
});


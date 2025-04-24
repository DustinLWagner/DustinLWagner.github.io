/* openweathermap API key = d7abb5e8c603fa467ae7ba6725571b70
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${apiKey}`;
*/


const apiKey = "d7abb5e8c603fa467ae7ba6725571b70"


document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("zip");
    const button = document.getElementById("zipSubmit");

    button.addEventListener('click', () => {
        console.log('clicked submit');
        const zip = input.value;
        const countryCode = 'us';
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${apiKey}`;
        console.log('Zip code entered:', zip);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })

    });
});


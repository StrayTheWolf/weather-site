document.addEventListener('DOMContentLoaded', () => {
    fetch('http://api.weatherstack.com/current?access_key=3f38b6d0ea2f177df2664e21d8c3b9e0&query=Rostov-on-don')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = `<div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">город: ${data.location.name}</h5>
                        <p class="card-text">время ${data.current.observation_time}</p>
                        <div class="card-footer text-muted">температура: ${data.current.temperature}</div>
                        <div class="weather-icon"><img src="${data.current.weather_icons}" alt=""/></div>
                    </div>
                </div>`;
            document.getElementById('weather-content').insertAdjacentHTML("beforeend", html);
            console.log(data.weather_icons)
        })
})
document.addEventListener('DOMContentLoaded',() =>{
    fetch('http://api.weatherstack.com/current?access_key=3f38b6d0ea2f177df2664e21d8c3b9e0&query=Rostov-on-don')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach((item) => {
                let html =  <div className="card text-center">
                               <div className="card-body">
                                   <h5 className="card-title">${item.location.name}</h5>
                                      <p className="card-text">${item.current.observation_time}</p>
                                      <div className="card-footer text-muted">${data.current.temperature}</div>
                                      <img src="" alt=""/>
                                 </div>
                           </div>;

                document.getElementById('weather-content').insertAdjacentHTML("beforeend", html);
            });




            console.log(data.location.name);
            console.log(data.current.observation_time);
            console.log(data.current.temperature);
        });
})



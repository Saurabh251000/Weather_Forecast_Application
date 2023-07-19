let CityRef = document.getElementById('city');
let result = document.getElementById('result');
let Search = document.getElementById('search');

let getWeather = () => {
    let cityvalue = CityRef.value;
    if(cityvalue.length == 0){
        // console.log("Please Enter the city First");
        result.innerHTML =  `<h1 style="color: white;">Please Enter the city name First</h1>`;
    }
    else{
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityvalue}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd33d6cfffemshc94788609bc0daep1d85bbjsnf5c94d4e721f',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then((response) =>{
                console.log(response)
                cloud_pct = response.cloud_pct
                temp = response.temp
                feels_like = response.feels_like
                humidity = response.humidity
                min_temp = response.min_temp
                max_temp = response.max_temp
                wind_speed = response.wind_speed
                wind_degrees = response.wind_degrees
                sunrise = new Date(response.sunrise*1000)
                sh = sunrise.getHours();
                sm = sunrise.getMinutes();
                sunset = new Date(response.sunset*1000)
                seth = sunset.getHours()-12;
                setm = sunset.getMinutes();
              
                result.innerHTML = `
                <div class="heading mt-5"><h1 style="color: white;">Current Wethar of ${cityvalue}</h1> </div>
                <div class="d-flex justify-content-around text-center mt-5" >
                
                <div class="col-md-3">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Temprature</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">${temp}<small class="text-body-secondary fw-light">&deg;C</small></h1>
                    <ul class="list-unstyled mt-3 mb-4" type="disc">
                      <li>Max Temprature : ${max_temp}&deg;C</li>
                      <li>Min Temprature : ${min_temp}&deg;C</li>
                      <li>Feels Like : ${feels_like}&deg;C</li>
                    </ul>
                  </div>
                </div>
              </div>
      
              <div class="col-md-3">
                    <div class="card mb-4 rounded-3 shadow-sm">
                      <div class="card-header py-3 text-bg-primary border-primary">
                        <h4 class="my-0 fw-normal">Humidity</h4>
                      </div>
                      <div class="card-body">
                        <h1 class="card-title pricing-card-title">${humidity} <small class="text-body-secondary fw-light"> &#37;</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>Cloud Percentage : ${cloud_pct}&#37;</li>
                          <li>Wind Speed : ${wind_speed} km/h</li>
                          <li>Wind Degree : ${wind_degrees}&deg;</li>
                        </ul>
                      </div>
                    </div>
              </div>
                  
              <div class="col-md-3">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Sun set/Sun rise</h4>
                  </div>
                  <div class="card-body">
                    <img src="icons/sunrise.jpg" alt="Error" class="sunrise" style=" height: 72px;
                    align-items: center;">
                  </div>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Sunrise : ${sh}:${sm} AM </li>
                    <li>Sunset : ${seth}:${setm} PM </li>
                  </ul>
                </div>
              </div>
              </div>
                `;

            })
            .catch((err) =>{
                // console.log(err);
                result.innerHTML = `<h3>City not found</h3>`;
            })

            let time = document.getElementById('Time');
            function DisplayTime() {
                let Time = new Date();
                time.innerHTML = `<h5>${Time}</h5> `;
            }
            setInterval(DisplayTime, 1000);
  }
};
Search.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);

//seting up Time

























// let CityRef = document.getElementById('city');
// let result = document.getElementById('result');
// let Search = document.getElementById('search-btn');

// let getWeather = () => {
//   let cityvalue = CityRef.value;
//   if (cityvalue.length == 0) {
//     result.innerHTML = `<h3>Please Enter the city name First</h3>`;
//   }
//   else {
//     const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityvalue}`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'd33d6cfffemshc94788609bc0daep1d85bbjsnf5c94d4e721f',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//       }
//     };
//     fetch(url, options)
//       .then(response => response.json())
//       .then((response) => {
//         console.log(response)
//         cloud_pct = response.cloud_pct
//         temp = response.temp
//         feels_like = response.feels_like
//         humidity = response.humidity
//         min_temp = response.min_temp
//         max_temp = response.max_temp
//         wind_speed = response.wind_speed
//         wind_degrees = response.wind_degrees
//         sunrise = new Date(response.sunrise * 1000)
//         sh = sunrise.getHours();
//         sm = sunrise.getMinutes();
//         sunset = new Date(response.sunset * 1000)
//         seth = sunset.getHours() - 12;
//         setm = sunset.getMinutes();
//         date = new Date();
//         result.innerHTML = `
//         <div class="heading mt-5"><h1 style="color: white;">Current Wethar of ${cityvalue}</h1> </div>
//         <div class="d-flex justify-content-around text-center mt-5" >
        
//         <div class="col-md-3">
//         <div class="card mb-4 rounded-3 shadow-sm">
//           <div class="card-header py-3 text-bg-primary border-primary">
//             <h4 class="my-0 fw-normal">Temprature</h4>
//           </div>
//           <div class="card-body">
//             <h1 class="card-title pricing-card-title">${temp}<small class="text-body-secondary fw-light">&deg;C</small></h1>
//             <ul class="list-unstyled mt-3 mb-4" type="disc">
//               <li>Max Temprature : ${max_temp}&deg;C</li>
//               <li>Min Temprature : ${min_temp}&deg;C</li>
//               <li>Feels Like : ${feels_like}&deg;C</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div class="col-md-3">
//             <div class="card mb-4 rounded-3 shadow-sm">
//               <div class="card-header py-3 text-bg-primary border-primary">
//                 <h4 class="my-0 fw-normal">Humidity</h4>
//               </div>
//               <div class="card-body">
//                 <h1 class="card-title pricing-card-title">${humidity} <small class="text-body-secondary fw-light"> &#37;</small></h1>
//                 <ul class="list-unstyled mt-3 mb-4">
//                   <li>Cloud Percentage : ${cloud_pct}&#37;</li>
//                   <li>Wind Speed : ${wind_speed} km/h</li>
//                   <li>Wind Degree : ${wind_degrees}&deg;</li>
//                 </ul>
//               </div>
//             </div>
//       </div>
          
//       <div class="col-md-3">
//         <div class="card mb-4 rounded-3 shadow-sm border-primary">
//           <div class="card-header py-3 text-bg-primary border-primary">
//             <h4 class="my-0 fw-normal">Sun set/Sun rise</h4>
//           </div>
//           <div class="card-body">
//             <img src="sunrise.jpg" alt="Error" class="sunrise" style=" height: 72px;
//             align-items: center;">
//           </div>
//           <ul class="list-unstyled mt-3 mb-4">
//             <li>Sunrise : ${sh}:${sm} AM </li>
//             <li>Sunset : ${seth}:${setm} PM </li>
//           </ul>
//         </div>
//       </div>
//       </div>
//         `;
//       })
//       .catch((err) => {
//         // console.log(err);
//         heading.innerHTML = ` Sorry! City Not Found `;
//         result.innerHTML = ``;
//       })
//   }
// };
// Search.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);








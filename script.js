//current weather
const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const countryName = document.querySelector('.country-name');
const weatherDesc = document.querySelector('.weather-desc');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const localTime = document.querySelector('.localtime');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const form = document.querySelector('.search-form')

// forecastDayly
const day1 = document.querySelector('.day1')
const icon1 = document.querySelector('.icon1 img')
const maxtemp1 = document.querySelector('.maxtemp1')
const mintemp1 = document.querySelector('.mintemp1')

const day2 = document.querySelector('.day2')
const icon2 = document.querySelector('.icon2 img')
const maxtemp2 = document.querySelector('.maxtemp2')
const mintemp2 = document.querySelector('.mintemp2')

const day3 = document.querySelector('.day3')
const icon3 = document.querySelector('.icon3 img')
const maxtemp3 = document.querySelector('.maxtemp3')
const mintemp3 = document.querySelector('.mintemp3')

const day4 = document.querySelector('.day4')
const icon4 = document.querySelector('.icon4 img')
const maxtemp4 = document.querySelector('.maxtemp4')
const mintemp4 = document.querySelector('.mintemp4')

const day5 = document.querySelector('.day5')
const icon5 = document.querySelector('.icon5 img')
const maxtemp5 = document.querySelector('.maxtemp5')
const mintemp5 = document.querySelector('.mintemp5')

const day6 = document.querySelector('.day6')
const icon6 = document.querySelector('.icon6 img')
const maxtemp6 = document.querySelector('.maxtemp6')
const mintemp6 = document.querySelector('.mintemp6')

// detailDayly

const showDetailItem1 = document.querySelector('.detail-item1')
const showDetailItem2 = document.querySelector('.detail-item2')
const showDetailItem3 = document.querySelector('.detail-item3')
const showDetailItem4 = document.querySelector('.detail-item4')
const showDetailItem5 = document.querySelector('.detail-item5')
const showDetailItem6 = document.querySelector('.detail-item6')

const detailBarDay1 = document.querySelector('.dayly1')
const detailBarDay2 = document.querySelector('.dayly2')
const detailBarDay3 = document.querySelector('.dayly3')
const detailBarDay4 = document.querySelector('.dayly4')
const detailBarDay5 = document.querySelector('.dayly5')
const detailBarDay6 = document.querySelector('.dayly6')

// event form submit
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (searchInput.value.length == 0) {
        alert("Please type in a city name !");
    }
    else {
        fetchAPI(searchInput.value)
    }
})

// fetch API
function fetchAPI(searchvalue){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ad49eb4c9a9d43929f131032230802&q=${searchvalue}&days=7&aqi=no&alerts=no&lang=vi`)
        .then( res => {
            return res.json();
        }).then(res => {
            console.log(res)
            weatherApp(res)
        });
        
}

// show data of weatherApp
function weatherApp(data){

    // show weather current
    cityName.innerHTML = data.location.name;
    countryName.innerHTML = data.location.country;
    weatherDesc.innerHTML = `-- `+ data.current.condition.text + ` --`;
    weatherIcon.setAttribute("src", data.current.condition.icon);
    temperature.innerHTML = data.current.temp_c + `&#176;C`;
    localTime.innerHTML = moment(data.location.localtime).format('LLLL');
    sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise;
    sunset.innerHTML = data.forecast.forecastday[0].astro.sunset;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;

    // show weather forecast
    day1.innerHTML = data.forecast.forecastday[1].date;
    icon1.setAttribute("src", data.forecast.forecastday[1].day.condition.icon);
    maxtemp1.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + `&#176 C`;
    mintemp1.innerHTML = data.forecast.forecastday[1].day.mintemp_c + `&#176 C`;

    day2.innerHTML = data.forecast.forecastday[2].date;
    icon2.setAttribute('src', data.forecast.forecastday[2].day.condition.icon);
    maxtemp2.innerHTML = data.forecast.forecastday[2].day.maxtemp_c + `&#176 C`;
    mintemp2.innerHTML = data.forecast.forecastday[2].day.mintemp_c + `&#176 C`;

    day3.innerHTML = data.forecast.forecastday[3].date;
    icon3.setAttribute('src', data.forecast.forecastday[3].day.condition.icon);
    maxtemp3.innerHTML = data.forecast.forecastday[3].day.maxtemp_c + `&#176 C`;
    mintemp3.innerHTML = data.forecast.forecastday[3].day.mintemp_c + `&#176 C`;

    day4.innerHTML = data.forecast.forecastday[4].date;
    icon4.setAttribute('src', data.forecast.forecastday[4].day.condition.icon);
    maxtemp4.innerHTML = data.forecast.forecastday[4].day.maxtemp_c + `&#176 C`;
    mintemp4.innerHTML = data.forecast.forecastday[4].day.mintemp_c + `&#176 C`;

    day5.innerHTML = data.forecast.forecastday[5].date;
    icon5.setAttribute('src', data.forecast.forecastday[5].day.condition.icon);
    maxtemp5.innerHTML = data.forecast.forecastday[5].day.maxtemp_c + `&#176 C`;
    mintemp5.innerHTML = data.forecast.forecastday[5].day.mintemp_c + `&#176 C`;

    day6.innerHTML = data.forecast.forecastday[6].date;
    icon6.setAttribute('src', data.forecast.forecastday[6].day.condition.icon);
    maxtemp6.innerHTML = data.forecast.forecastday[6].day.maxtemp_c + `&#176 C`;
    mintemp6.innerHTML = data.forecast.forecastday[6].day.mintemp_c + `&#176 C`;


    // show detailDay1
    const detailIcon1 = document.querySelector('.detail-item1 .detail-icon img')
    const detailDesc1 = document.querySelector('.detail-item1 .detail-text')
    const detailSunrise1 = document.querySelector('.detail-item1 .detail-sunrise')
    const detailSunset1 = document.querySelector('.detail-item1 .detail-sunset')
    const detailAvgtempc1 = document.querySelector('.detail-item1 .detail-avgtempc')
    const detailAvghumidity1 = document.querySelector('.detail-item1 .detail-avghumidity')

    detailIcon1.setAttribute('src', data.forecast.forecastday[1].day.condition.icon);
    detailDesc1.innerHTML = `-- `+ data.forecast.forecastday[1].day.condition.text + ` --`;
    detailSunrise1.innerHTML = `Sunset: `+ data.forecast.forecastday[1].astro.sunrise;
    detailSunset1.innerHTML = `Sunrise: `+ data.forecast.forecastday[1].astro.sunset;
    detailAvgtempc1.innerHTML = `Average temperature: `+ data.forecast.forecastday[1].day.avgtemp_c + `&#176 C`;
    detailAvghumidity1.innerHTML = `Average humidity: `+ data.forecast.forecastday[1].day.avghumidity + ` %`;

    // show detailDay2
    const detailIcon2 = document.querySelector('.detail-item2 .detail-icon img')
    const detailDesc2 = document.querySelector('.detail-item2 .detail-text')
    const detailSunrise2 = document.querySelector('.detail-item2 .detail-sunrise')
    const detailSunset2 = document.querySelector('.detail-item2 .detail-sunset')
    const detailAvgtempc2 = document.querySelector('.detail-item2 .detail-avgtempc')
    const detailAvghumidity2 = document.querySelector('.detail-item2 .detail-avghumidity')

    detailIcon2.setAttribute('src', data.forecast.forecastday[2].day.condition.icon);
    detailDesc2.innerHTML = `-- `+ data.forecast.forecastday[2].day.condition.text + ` --`;
    detailSunrise2.innerHTML = `Sunset: `+ data.forecast.forecastday[2].astro.sunrise;
    detailSunset2.innerHTML = `Sunrise: `+ data.forecast.forecastday[2].astro.sunset;
    detailAvgtempc2.innerHTML = `Average temperature: `+ data.forecast.forecastday[2].day.avgtemp_c + `&#176 C`;
    detailAvghumidity2.innerHTML = `Average humidity: `+ data.forecast.forecastday[2].day.avghumidity + ` %`;

    // show detailDay3
    const detailIcon3 = document.querySelector('.detail-item3 .detail-icon img')
    const detailDesc3 = document.querySelector('.detail-item3 .detail-text')
    const detailSunrise3 = document.querySelector('.detail-item3 .detail-sunrise')
    const detailSunset3 = document.querySelector('.detail-item3 .detail-sunset')
    const detailAvgtempc3 = document.querySelector('.detail-item3 .detail-avgtempc')
    const detailAvghumidity3 = document.querySelector('.detail-item3 .detail-avghumidity')

    detailIcon3.setAttribute('src', data.forecast.forecastday[3].day.condition.icon);
    detailDesc3.innerHTML = `-- `+ data.forecast.forecastday[3].day.condition.text + ` --`;
    detailSunrise3.innerHTML = `Sunset: `+ data.forecast.forecastday[3].astro.sunrise;
    detailSunset3.innerHTML = `Sunrise: `+ data.forecast.forecastday[3].astro.sunset;
    detailAvgtempc3.innerHTML = `Average temperature: `+ data.forecast.forecastday[3].day.avgtemp_c + `&#176 C`;
    detailAvghumidity3.innerHTML = `Average humidity: `+ data.forecast.forecastday[3].day.avghumidity + ` %`;

    // show detailDay4
    const detailIcon4 = document.querySelector('.detail-item4 .detail-icon img')
    const detailDesc4 = document.querySelector('.detail-item4 .detail-text')
    const detailSunrise4 = document.querySelector('.detail-item4 .detail-sunrise')
    const detailSunset4 = document.querySelector('.detail-item4 .detail-sunset')
    const detailAvgtempc4 = document.querySelector('.detail-item4 .detail-avgtempc')
    const detailAvghumidity4 = document.querySelector('.detail-item4 .detail-avghumidity')

    detailIcon4.setAttribute('src', data.forecast.forecastday[4].day.condition.icon);
    detailDesc4.innerHTML = `-- `+ data.forecast.forecastday[4].day.condition.text + ` --`;
    detailSunrise4.innerHTML = `Sunset: `+ data.forecast.forecastday[4].astro.sunrise;
    detailSunset4.innerHTML = `Sunrise: `+ data.forecast.forecastday[4].astro.sunset;
    detailAvgtempc4.innerHTML = `Average temperature: `+ data.forecast.forecastday[4].day.avgtemp_c + `&#176 C`;
    detailAvghumidity4.innerHTML = `Average humidity: `+ data.forecast.forecastday[4].day.avghumidity + ` %`;

    // show detailDay5
    const detailIcon5 = document.querySelector('.detail-item5 .detail-icon img')
    const detailDesc5 = document.querySelector('.detail-item5 .detail-text')
    const detailSunrise5 = document.querySelector('.detail-item5 .detail-sunrise')
    const detailSunset5 = document.querySelector('.detail-item5 .detail-sunset')
    const detailAvgtempc5 = document.querySelector('.detail-item5 .detail-avgtempc')
    const detailAvghumidity5 = document.querySelector('.detail-item5 .detail-avghumidity')

    detailIcon5.setAttribute('src', data.forecast.forecastday[5].day.condition.icon);
    detailDesc5.innerHTML = `-- `+ data.forecast.forecastday[5].day.condition.text + ` --`;
    detailSunrise5.innerHTML = `Sunset: `+ data.forecast.forecastday[5].astro.sunrise;
    detailSunset5.innerHTML = `Sunrise: `+ data.forecast.forecastday[5].astro.sunset;
    detailAvgtempc5.innerHTML = `Average temperature: `+ data.forecast.forecastday[5].day.avgtemp_c + `&#176 C`;
    detailAvghumidity5.innerHTML = `Average humidity: `+ data.forecast.forecastday[5].day.avghumidity + ` %`;

    // show detailDay6
    const detailIcon6 = document.querySelector('.detail-item6 .detail-icon img')
    const detailDesc6 = document.querySelector('.detail-item6 .detail-text')
    const detailSunrise6 = document.querySelector('.detail-item6 .detail-sunrise')
    const detailSunset6 = document.querySelector('.detail-item6 .detail-sunset')
    const detailAvgtempc6 = document.querySelector('.detail-item6 .detail-avgtempc')
    const detailAvghumidity6 = document.querySelector('.detail-item6 .detail-avghumidity')

    detailIcon6.setAttribute('src', data.forecast.forecastday[6].day.condition.icon);
    detailDesc6.innerHTML = `-- `+ data.forecast.forecastday[6].day.condition.text + ` --`;
    detailSunrise6.innerHTML = `Sunset: `+ data.forecast.forecastday[6].astro.sunrise;
    detailSunset6.innerHTML = `Sunrise: `+ data.forecast.forecastday[6].astro.sunset;
    detailAvgtempc6.innerHTML = `Average temperature: `+ data.forecast.forecastday[6].day.avgtemp_c + `&#176 C`;
    detailAvghumidity6.innerHTML = `Average humidity: `+ data.forecast.forecastday[6].day.avghumidity + ` %`;

}

// event click button
detailBarDay1.addEventListener('click', function(){
    detailBarDay1.classList.add("active");
    detailBarDay2.classList.remove("active");
    detailBarDay3.classList.remove("active");
    detailBarDay4.classList.remove("active");
    detailBarDay5.classList.remove("active");
    detailBarDay6.classList.remove("active");

    showDetailItem1.style.display = "flex";
    showDetailItem2.style.display = "none";
    showDetailItem3.style.display = "none";
    showDetailItem4.style.display = "none";
    showDetailItem5.style.display = "none";
    showDetailItem6.style.display = "none";

    detailBarDay1.style.backgroundColor = 'rgba(211, 211, 211, 0.423)'
    detailBarDay2.style.backgroundColor = 'transparent'
    detailBarDay3.style.backgroundColor = 'transparent'
    detailBarDay4.style.backgroundColor = 'transparent'
    detailBarDay5.style.backgroundColor = 'transparent'
    detailBarDay6.style.backgroundColor = 'transparent'
})
detailBarDay2.addEventListener('click', function(){
    detailBarDay1.classList.remove("active");
    detailBarDay2.classList.add("active");
    detailBarDay3.classList.remove("active");
    detailBarDay4.classList.remove("active");
    detailBarDay5.classList.remove("active");
    detailBarDay6.classList.remove("active");

    showDetailItem1.style.display = "none";
    showDetailItem2.style.display = "flex";
    showDetailItem3.style.display = "none";
    showDetailItem4.style.display = "none";
    showDetailItem5.style.display = "none";
    showDetailItem6.style.display = "none";

    detailBarDay1.style.backgroundColor = 'transparent'
    detailBarDay2.style.backgroundColor = 'rgba(211, 211, 211, 0.423)'
    detailBarDay3.style.backgroundColor = 'transparent'
    detailBarDay4.style.backgroundColor = 'transparent'
    detailBarDay5.style.backgroundColor = 'transparent'
    detailBarDay6.style.backgroundColor = 'transparent'
})
detailBarDay3.addEventListener('click', function(){
    detailBarDay1.classList.remove("active");
    detailBarDay2.classList.remove("active");
    detailBarDay3.classList.add("active");
    detailBarDay4.classList.remove("active");
    detailBarDay5.classList.remove("active");
    detailBarDay6.classList.remove("active");

    showDetailItem1.style.display = "none";
    showDetailItem2.style.display = "none";
    showDetailItem3.style.display = "flex";
    showDetailItem4.style.display = "none";
    showDetailItem5.style.display = "none";
    showDetailItem6.style.display = "none";

    detailBarDay1.style.backgroundColor = 'transparent'
    detailBarDay2.style.backgroundColor = 'transparent'
    detailBarDay3.style.backgroundColor = 'rgba(211, 211, 211, 0.423)'
    detailBarDay4.style.backgroundColor = 'transparent'
    detailBarDay5.style.backgroundColor = 'transparent'
    detailBarDay6.style.backgroundColor = 'transparent'
})
detailBarDay4.addEventListener('click', function(){
    detailBarDay1.classList.remove("active");
    detailBarDay2.classList.remove("active");
    detailBarDay3.classList.remove("active");
    detailBarDay4.classList.add("active");
    detailBarDay5.classList.remove("active");
    detailBarDay6.classList.remove("active");

    showDetailItem1.style.display = "none";
    showDetailItem2.style.display = "none";
    showDetailItem3.style.display = "none";
    showDetailItem4.style.display = "flex";
    showDetailItem5.style.display = "none";
    showDetailItem6.style.display = "none";

    detailBarDay1.style.backgroundColor = 'transparent'
    detailBarDay2.style.backgroundColor = 'transparent'
    detailBarDay3.style.backgroundColor = 'transparent'
    detailBarDay4.style.backgroundColor = 'rgba(211, 211, 211, 0.423)'
    detailBarDay5.style.backgroundColor = 'transparent'
    detailBarDay6.style.backgroundColor = 'transparent'
})
detailBarDay5.addEventListener('click', function(){
    detailBarDay1.classList.remove("active");
    detailBarDay2.classList.remove("active");
    detailBarDay3.classList.remove("active");
    detailBarDay4.classList.remove("active");
    detailBarDay5.classList.add("active");
    detailBarDay6.classList.remove("active");

    showDetailItem1.style.display = "none";
    showDetailItem2.style.display = "none";
    showDetailItem3.style.display = "none";
    showDetailItem4.style.display = "none";
    showDetailItem5.style.display = "flex";
    showDetailItem6.style.display = "none";

    detailBarDay1.style.backgroundColor = 'transparent'
    detailBarDay2.style.backgroundColor = 'transparent'
    detailBarDay3.style.backgroundColor = 'transparent'
    detailBarDay4.style.backgroundColor = 'transparent'
    detailBarDay5.style.backgroundColor = 'rgba(211, 211, 211, 0.423)'
    detailBarDay6.style.backgroundColor = 'transparent'
})
detailBarDay6.addEventListener('click', function(){
    detailBarDay1.classList.remove("active");
    detailBarDay2.classList.remove("active");
    detailBarDay3.classList.remove("active");
    detailBarDay4.classList.remove("active");
    detailBarDay5.classList.remove("active");
    detailBarDay6.classList.add("active");

    showDetailItem1.style.display = "none";
    showDetailItem2.style.display = "none";
    showDetailItem3.style.display = "none";
    showDetailItem4.style.display = "none";
    showDetailItem5.style.display = "none";
    showDetailItem6.style.display = "flex";

    detailBarDay1.style.backgroundColor = 'transparent'
    detailBarDay2.style.backgroundColor = 'transparent'
    detailBarDay3.style.backgroundColor = 'transparent'
    detailBarDay4.style.backgroundColor = 'transparent'
    detailBarDay5.style.backgroundColor = 'transparent'
    detailBarDay6.style.backgroundColor = 'rgba(211, 211, 211, 0.423)'
})

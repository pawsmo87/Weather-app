const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')


const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "&appid=0c9540b7b1a7433ed083b33909c3f86b"
const API_UNITS = "&units=metric"

const getWeather = () => {
    const city = input.value || "Warszawa"
    const URL = API_LINK + city + API_KEY + API_UNITS
axios.get(URL).then(res => {
    const temp = res.data.main.temp
    const hum = res. data.main.humidity
    const status = res.data.weather[0]
    console.log(res.data.weather[0].id)

    input.value = ""
    warning.textContent = ""

    const image = () => {
        if (res.data.weather[0].id >=200 && res.data.weather[0].id < 300){
            photo.setAttribute("src", "./img/thunderstorm.png")
        } else if (res.data.weather[0].id >= 300 && res.data.weather[0].id < 400){
            photo.setAttribute("src", "./img/drizzle.png")
        }else if (res.data.weather[0].id >= 500 && res.data.weather[0].id < 600){
            photo.setAttribute("src", "./img/rain.png")
        }else if (res.data.weather[0].id >= 600 && res.data.weather[0].id < 700){
            photo.setAttribute("src", "./img/ice.png")
        }else if (res.data.weather[0].id >= 700 && res.data.weather[0].id <800 ){
            photo.setAttribute("src", "./img/fog.png")
        }else if (res.data.weather[0].id == 800){
            photo.setAttribute("src", "./img/sun.png")
        }else if (res.data.weather[0].id > 800 && res.data.weather[0].id < 900){
            photo.setAttribute("src", "./img/cloud.png")
        }
    }
    image()
    
    cityName.textContent = res.data.name
    temperature.textContent = Math.floor(temp) + "℃"
    humidity.textContent = hum + "%"
    weather.textContent = status.main
    
}).catch(() => warning.textContent = "wpisz poprawną nazwę miasta")

}

getWeather()
button.addEventListener("click", getWeather)


const enterKeyCheck = (e) => {
    if (e.key === "Enter")
    getWeather()
}
input.addEventListener("keyup", enterKeyCheck)



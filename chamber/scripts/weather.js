const currentWeatherDiv = document.querySelector("#current-weather");
const forecastDiv = document.querySelector("#forecast");

const lat = -33.51;
const lon = -70.76;

const apiKey = "5389038141d560d92d3c01c8e7966863";
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const data = await response.json();
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    currentWeatherDiv.innerHTML = `
    <p class="temp">${temp}°C</p>
    <img src="${iconUrl}" alt="${description}" width="80" height="80">
    <p class="desc">${description}</p>
`;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getCurrentWeather();

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();

            const dailyNoon = data.list.filter((item) => item.dt_txt.includes("12:00:00"));
            const threeDays = dailyNoon.slice(0, 3);

            forecastDiv.innerHTML = "<h3>3-Day Forecast</h3>" + threeDays.map((day) => {
                const date = new Date(day.dt * 1000);
                const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
                const temp = Math.round(day.main.temp);
                return `<p><strong>${dayName}:</strong> ${temp}°C</p>`;
            }).join("");
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getForecast();
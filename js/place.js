document.addEventListener("DOMContentLoaded", function () {
    // Update Year in Footer
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Update Last Modified Date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (
                13.12 +
                0.6215 * temp - 
                11.37 * Math.pow(windSpeed, 0.16) +
                0.3965 * temp * Math.pow(windSpeed, 0.16)
            ).toFixed(1) + "°C";
        } else {
            return "N/A";
        }
    }

    // Get Weather Data Elements
    const tempElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("windSpeed");
    const windChillElement = document.getElementById("windChill");
    const weatherIconElement = document.querySelector(".weather-icon");

    if (tempElement && windSpeedElement && windChillElement && weatherIconElement) {
        let temperature = parseFloat(tempElement.textContent);
        let windSpeed = parseFloat(windSpeedElement.textContent);

        // Update Wind Chill
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);

        // Dynamic Weather Icon Change
        const iconImg = document.createElement("img"); // Create an image element to display the icon
        if (temperature < 10) {
            iconImg.src = "images/cold-weather-icon.svg"; // Link to the cold weather icon
            iconImg.alt = "Cold Weather Icon";
        } else if (temperature > 30) {
            iconImg.src = "images/hot-weather-icon.svg"; // Link to the hot weather icon
            iconImg.alt = "Hot Weather Icon";
        } else if (temperature > 20 && temperature <= 30) {
            iconImg.src = "images/partly-cloudy.svg"; // Partly cloudy weather icon
            iconImg.alt = "Partly Cloudy Weather Icon";
        } else if (windSpeed > 20) {
            iconImg.src = "images/sunny-icon.svg"; // Windy weather icon
            iconImg.alt = "sunny Weather Icon";
        }

        // Append the icon to the weather icon container
        weatherIconElement.innerHTML = ''; // Clear any existing content
        weatherIconElement.appendChild(iconImg);
    }
});
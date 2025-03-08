document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const temperatureElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("windSpeed");
    const windChillElement = document.getElementById("windChill");
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("lastModified");

    // Static values
    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    // Wind Chill Calculation Function
    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
        }
        return "N/A";
    }

    // Update Wind Chill
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);

    // Update Footer Year
    yearElement.textContent = new Date().getFullYear();

    // Update Last Modified Date
    lastModifiedElement.textContent = document.lastModified;
});
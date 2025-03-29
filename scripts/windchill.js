document.addEventListener("DOMContentLoaded", function () {
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (
                13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 
                0.3965 * temp * Math.pow(windSpeed, 0.16)
            ).toFixed(1);
        }
        return "N/A";
    }

    let temperature = 10;
    let windSpeed = 5;
    document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed) + " °C";

    document.getElementById("lastModified").textContent = document.lastModified;
});
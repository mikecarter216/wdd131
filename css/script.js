/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    document.getElementById("year").textContent = new Date().getFullYear();
    
    // Set last modified date
    document.getElementById("lastModified").textContent = document.lastModified;
    
    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
        } else {
            return "N/A";
        }
    }
    
    let temperature = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed) + "°C";
});
document.addEventListener("DOMContentLoaded", function() {
    const lastModified = new Date(document.lastModified);

    const formattedDate = lastModified.toLocaleDateString();
    const formattedTime = lastModified.toLocaleTimeString();

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${formattedDate} ${formattedTime}`;
    }
});
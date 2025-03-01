// Get the current year and set it in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date and format it
const lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `Last Updated: ${lastModifiedDate.toLocaleString()}`;

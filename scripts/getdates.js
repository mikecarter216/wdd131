// Get current year and set it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date and set it in the footer
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;

// Get the current year and last modified date
const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

// Update the footer with the current year and last modified date
document.getElementById("last-modified").textContent = lastModifiedDate;

// Add event listener to the hamburger menu
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
});

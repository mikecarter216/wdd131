document.addEventListener("DOMContentLoaded", () => {
    // Lazy loading for images
    const images = document.querySelectorAll(".gallery img");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => {
        observer.observe(img);
    });

    // Update the footer dynamically
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Ensure images are displayed in a grid layout
    const gallery = document.querySelector(".gallery");
    if (gallery) {
        gallery.style.display = "grid";
        gallery.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
        gallery.style.gap = "10px";
    }
});
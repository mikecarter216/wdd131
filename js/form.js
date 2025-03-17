document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    const productSelect = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (Rating: ${product.averagerating})`;
        productSelect.appendChild(option);
    });

    const reviewForm = document.getElementById("reviewForm");
    if (reviewForm) {
        reviewForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let reviewCount = parseInt(localStorage.getItem("reviewCount") || "0", 10);
            reviewCount++;
            localStorage.setItem("reviewCount", reviewCount);

            window.location.href = "review.html";
        });
    }

    if (window.location.pathname.includes("review.html")) {
        const reviewCount = localStorage.getItem("reviewCount") || 0;
        const reviewCountElement = document.getElementById("review-count");

        if (reviewCountElement) {
            reviewCountElement.textContent = `Total Reviews: ${reviewCount}`;
        }
    }
});
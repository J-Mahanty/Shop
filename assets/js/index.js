const products = [
                "purple",
                "green",
                "blue"
]

// To navigate from home page to product pages

function productNavigationHandler() {
    document.querySelectorAll(".img-container").forEach(function(item) {
        item.addEventListener("click", function (e) {
            for(const product of products) {
                if (e.target.classList.contains(product)) {
                    const path = `/${product}.html`
                    window.location.href= path;
                }
            }
        });
    });
}

// Page load

productNavigationHandler();
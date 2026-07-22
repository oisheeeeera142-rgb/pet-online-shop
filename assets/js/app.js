function renderNavbar() {

    const nav = document.getElementById("navbarMenu");
    if (!nav) return;

    if (isLoggedIn()) {

        const user = getCurrentUser();

        nav.innerHTML = `
            <div class="flex items-center gap-8">
                <a href="index.html" class="font-medium hover:text-emerald-600">
                    Home
                </a>

                <a href="products.html" class="font-medium hover:text-emerald-600">
                    Products
                </a>

                <a href="profile.html" class="font-medium hover:text-emerald-600">
                    My Profile
                </a>
                 <a href="cart.html" class="font-medium hover:text-emerald-600">
            🛒 Cart
        </a>
                 </div>
            

            <div class="flex items-center gap-4 ml-auto">

                <div class="flex items-center gap-2">
                    <div class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                        ${user.name.charAt(0).toUpperCase()}
                    </div>

                    <span class="font-medium">
                        ${user.name}
                    </span>
                </div>

                <button
                    onclick="logoutUser()"
                    class="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Logout
                </button>

            </div>
        `;

    } else {

        nav.innerHTML = `
            <a href="index.html" class="font-medium hover:text-emerald-600">
                Home
            </a>

            <a href="products.html" class="font-medium hover:text-emerald-600">
                Products
            </a>

            <a href="register.html"
               class="font-medium hover:text-emerald-600">
                Register
            </a>

            <a href="login.html"
               class="bg-emerald-600 text-white px-4 py-2 rounded-lg">
                Login
            </a>
           
    
        `;
    }
}
let currentProducts = [];

function displayProducts(products) {

    const grid = document.getElementById("productGrid");
    if (!grid) return;

    if (!products.length) {
        grid.innerHTML = `
            <p class="text-center text-gray-500 col-span-full">
                No products found
            </p>
        `;
        return;
    }

    grid.innerHTML = products.map(p => {

        const stars = "⭐".repeat(Math.round(p.rating || 0));

        return `
<div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">

    <img src="${p.image}"
         onerror="this.src='assets/images/default.png'"
         alt="${p.name}"
         class="w-full h-56 object-cover object-center">

    <div class="p-5">

        <p class="uppercase text-orange-500 tracking-wide text-xs font-semibold">
            ${p.category}
        </p>

        <h3 class="text-lg font-bold text-slate-800 mt-2 mb-2 line-clamp-1">
            ${p.name}
        </h3>

        <div class="flex items-center gap-2 mb-4">

            <span class="text-yellow-400 text-sm">
                ${stars}
            </span>

            <span class="text-gray-500 text-sm">
                (${p.rating ?? 0})
            </span>

        </div>

        <div class="flex items-center justify-between">

            <span class="text-xl font-bold text-orange-500">
                ৳${p.price}
            </span>

            <a href="product.html?id=${p.id}"
               class="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg font-semibold transition">
               View Details
            </a>

        </div>

    </div>

</div>
        `;
    }).join("");
}

function renderFeaturedProducts() {
    const featured = getAllProducts().slice(0, 8);
    displayProducts(featured);
}

function renderAllProducts() {
    currentProducts = [...getAllProducts()];
    displayProducts(currentProducts);
}

function setCategory(category) {

    if (category === "all") {
        currentProducts = getAllProducts();
    } else {
        currentProducts = getAllProducts().filter(
            p => p.category === category
        );
    }

    displayProducts(currentProducts);
}

function filterProducts() {

    const text =
        document.getElementById("searchInput")
            .value
            .toLowerCase();

    const filtered = currentProducts.filter(p =>
        p.name.toLowerCase().includes(text)
    );

    displayProducts(filtered);
}

function sortProducts() {

    const value =
        document.getElementById("sortSelect").value;

    let sorted = [...currentProducts];

    if (value === "low") {

        sorted.sort((a, b) =>
            a.price - b.price
        );

    } else if (value === "high") {

        sorted.sort((a, b) =>
            b.price - a.price
        );

    } else if (value === "rating") {

        sorted.sort((a, b) =>
            b.rating - a.rating
        );

    } else {

        sorted = [...currentProducts];
    }

    displayProducts(sorted);
}

document.addEventListener("DOMContentLoaded", () => {

    renderNavbar();

    const page =
        window.location.pathname.split("/").pop();

    if (page === "index.html" || page === "") {
        renderFeaturedProducts();
    }

    if (page === "products.html") {
        renderAllProducts();
    }
});
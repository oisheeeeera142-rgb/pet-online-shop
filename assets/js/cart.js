function getCartKey() {
    const user = getCurrentUser();
    return `userCart_${user.id}`;
}

function getCart() {
    if (!isLoggedIn()) return [];
    return JSON.parse(localStorage.getItem(getCartKey()) || "[]");
}

function saveCart(cart) {
    localStorage.setItem(getCartKey(), JSON.stringify(cart));
}

function addToCart(productId) {
    if (!isLoggedIn()) {
        localStorage.setItem("redirectAfterLogin", window.location.href);
        window.location.href = "login.html";
        return;
    }

    let cart = getCart();
    let product = getProductById(productId);

    let existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }

    saveCart(cart);
    alert("Added to cart");
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

function increaseQty(productId) {
    let cart = getCart();
    let item = cart.find(i => i.id === productId);
    if (item) item.qty++;
    saveCart(cart);
    renderCart();
}

function decreaseQty(productId) {
    let cart = getCart();
    let item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty--;

    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    saveCart(cart);
    renderCart();
}

function getCartTotal() {
    let cart = getCart();
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// ---------- ORDERS ----------
// Orders are stored per-user, mirroring the existing userCart_<id> pattern.
function getOrdersKey() {
    const user = getCurrentUser();
    return `userOrders_${user.id}`;
}

function getOrders() {
    if (!isLoggedIn()) return [];
    return JSON.parse(localStorage.getItem(getOrdersKey()) || "[]");
}

function saveOrders(orders) {
    localStorage.setItem(getOrdersKey(), JSON.stringify(orders));
}

// Saves the current cart as ONE completed order, then clears the cart.
// Returns the created order, or null if there was nothing to order.
function placeOrder() {
    if (!isLoggedIn()) return null;

    const cart = getCart();
    if (!cart.length) return null;

    const order = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        itemCount: cart.reduce((sum, item) => sum + item.qty, 0),
        total: getCartTotal(),
        status: "Completed",
        items: cart
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);

    saveCart([]);

    return order;
}

function renderCart() {
    const container = document.getElementById("cartItems");
    const totalBox = document.getElementById("cartTotal");

    if (!container) return;

    let cart = getCart();

    container.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center bg-white p-4 rounded shadow">
            <div class="flex items-center gap-4">
                <img src="${item.image}" class="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 class="font-semibold">${item.name}</h3>
                    <p class="text-sm text-gray-500">৳${item.price}</p>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <button onclick="decreaseQty(${item.id})" class="px-2 bg-gray-200">-</button>
                <span>${item.qty}</span>
                <button onclick="increaseQty(${item.id})" class="px-2 bg-gray-200">+</button>
            </div>

            <button onclick="removeFromCart(${item.id})" class="text-red-500">X</button>
        </div>
    `).join("");

    if (totalBox) {
        totalBox.innerText = "Total: ৳" + getCartTotal();
    }
}
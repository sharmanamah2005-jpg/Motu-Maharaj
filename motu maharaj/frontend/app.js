const API_URL = "http://127.0.0.1:8000";

const menu = [
    { name: "Veg momos steamed", category: "Momos", price: 70, emoji: "🥟" },
    { name: "Paneer momo steamed", category: "Momos", price: 110, emoji: "🥟" },
    { name: "Cheese corn momo steamed", category: "Momos", price: 130, emoji: "🥟" },
    { name: "Veg fry momo", category: "Momos", price: 80, emoji: "🥟" },
    { name: "Gravy momos", category: "Momos", price: 120, emoji: "🥣" },
    { name: "Kurkure veg momos", category: "Momos", price: 120, emoji: "🥟" },
    { name: "Creamy momos", category: "Momos", price: 130, emoji: "🥟" },
    { name: "Peri peri momos", category: "Momos", price: 100, emoji: "🌶️" },
    { name: "Burnt garlic momos", category: "Momos", price: 130, emoji: "🥟" },
    { name: "Paneer momo fry", category: "Momos", price: 130, emoji: "🥟" },
    { name: "Cheese corn momo fry", category: "Momos", price: 140, emoji: "🥟" },
    { name: "Cheese corn kurkure momo", category: "Momos", price: 150, emoji: "🥟" },
    { name: "Paneer kurkure momo", category: "Momos", price: 140, emoji: "🥟" },
    { name: "Jhol momos", category: "Momos", price: 150, emoji: "🥣" },
    { name: "Devil momos", category: "Momos", price: 180, emoji: "🌶️" },

    { name: "Classic pan fried momos - Veg", category: "Pan Fried Momos", price: 130, emoji: "🥟" },
    { name: "Classic pan fried momos - Paneer", category: "Pan Fried Momos", price: 150, emoji: "🥟" },
    { name: "Butter garlic momos", category: "Pan Fried Momos", price: 150, emoji: "🧄" },
    { name: "Chilli oil infused momos", category: "Pan Fried Momos", price: 160, emoji: "🌶️" },
    { name: "Shanghai pan fried momos", category: "Pan Fried Momos", price: 180, emoji: "🥟" },

    { name: "Tandoori momos", category: "Tandoori Momos", price: 130, emoji: "🔥" },
    { name: "Achari momos", category: "Tandoori Momos", price: 150, emoji: "🔥" },
    { name: "Malai momos", category: "Tandoori Momos", price: 200, emoji: "🔥" },

    { name: "Chinese bhel", category: "Snacks", price: 100, emoji: "🍜" },
    { name: "French fries", category: "Snacks", price: 100, emoji: "🍟" },
    { name: "Peri peri fries", category: "Snacks", price: 120, emoji: "🍟" },
    { name: "Cheesy fries", category: "Snacks", price: 150, emoji: "🧀" },
    { name: "Devil fries", category: "Snacks", price: 150, emoji: "🍟" },
    { name: "Crispy corn", category: "Snacks", price: 150, emoji: "🌽" },

    { name: "Spring rolls", category: "Spring Rolls", price: 90, emoji: "🥢" },
    { name: "Kurkure spring roll", category: "Spring Rolls", price: 120, emoji: "🥢" },
    { name: "Tandoori spring roll", category: "Spring Rolls", price: 150, emoji: "🥢" },

    { name: "Red pasta", category: "Pasta", price: 100, emoji: "🍝" },
    { name: "Pink pasta", category: "Pasta", price: 120, emoji: "🍝" },
    { name: "White pasta", category: "Pasta", price: 140, emoji: "🍝" },
    { name: "Farmhouse pasta", category: "Pasta", price: 170, emoji: "🍝" },

    { name: "Veg overloaded pizza", category: "Pizza", price: 150, emoji: "🍕" },
    { name: "Tandoori paneer pizza", category: "Pizza", price: 200, emoji: "🍕" },

    { name: "Aloo tikki burger", category: "Burger", price: 50, emoji: "🍔" },
    { name: "Motu Maharaj noodle burger", category: "Burger", price: 70, emoji: "🍔" },
    { name: "Motu special cheese burger", category: "Burger", price: 90, emoji: "🍔" },

    { name: "Veg grilled sandwich", category: "Sandwich", price: 100, emoji: "🥪" },
    { name: "Veg grilled bhujia sandwich", category: "Sandwich", price: 130, emoji: "🥪" },
    { name: "Cheese corn sandwich", category: "Sandwich", price: 150, emoji: "🥪" },
    { name: "Mumbai masala sandwich", category: "Sandwich", price: 160, emoji: "🥪" },
    { name: "Tandoori paneer sandwich", category: "Sandwich", price: 180, emoji: "🥪" },
    { name: "Peri peri masala sandwich", category: "Sandwich", price: 150, emoji: "🥪" },
    { name: "Motu Maharaj jumbo club sandwich", category: "Sandwich", price: 200, emoji: "🥪" },

    { name: "Veg noodles", category: "Noodles", price: 90, emoji: "🍜" },
    { name: "Hakka noodles", category: "Noodles", price: 100, emoji: "🍜" },
    { name: "Chilli garlic noodles", category: "Noodles", price: 120, emoji: "🍜" },
    { name: "Singapore noodles", category: "Noodles", price: 130, emoji: "🍜" },
    { name: "Burnt garlic noodles", category: "Noodles", price: 150, emoji: "🍜" },
    { name: "Schezwan noodles", category: "Noodles", price: 130, emoji: "🍜" },
    { name: "Shanghai noodles", category: "Noodles", price: 170, emoji: "🍜" },
    { name: "Devil noodles", category: "Noodles", price: 200, emoji: "🌶️" },

    { name: "Veg gravy Manchurian", category: "Chinese Main", price: 100, emoji: "🥘" },
    { name: "Veg dry Manchurian", category: "Chinese Main", price: 120, emoji: "🥘" },
    { name: "Chilli potato", category: "Chinese Main", price: 100, emoji: "🥔" },
    { name: "Honey chilli potato", category: "Chinese Main", price: 120, emoji: "🥔" },
    { name: "Veg fried rice", category: "Chinese Main", price: 100, emoji: "🍚" },
    { name: "Schezwan fried rice", category: "Chinese Main", price: 120, emoji: "🍚" },
    { name: "Noodles fried rice combo", category: "Chinese Main", price: 150, emoji: "🍱" },
    { name: "Noodle Manchurian mix", category: "Chinese Main", price: 160, emoji: "🥘" },
    { name: "Paneer chilli gravy", category: "Chinese Main", price: 150, emoji: "🥘" },
    { name: "Paneer chilli dry", category: "Chinese Main", price: 170, emoji: "🥘" },

    { name: "Paneer kathi roll", category: "Rolls", price: 120, emoji: "🌯" },
    { name: "Tandoori paneer roll", category: "Rolls", price: 150, emoji: "🌯" },
    { name: "Hangama roll", category: "Rolls", price: 100, emoji: "🌯" },

    { name: "Volcano momos", category: "Specials", price: 170, emoji: "🌋" },
    { name: "Hangama noodles", category: "Specials", price: 180, emoji: "🍜" },

    { name: "Hot and sour soup", category: "Soups", price: 100, emoji: "🥣" },
    { name: "Manchow soup", category: "Soups", price: 120, emoji: "🥣" },
    { name: "Sweet corn soup", category: "Soups", price: 120, emoji: "🥣" }
];

let cart = {};
let activeCategory = "All";

const menuGrid = document.getElementById("menuGrid");
const categoriesElement = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");

const categories = [
    "All",
    ...new Set(menu.map(item => item.category))
];

function money(amount) {
    return "₹" + Number(amount).toFixed(0);
}

function renderCategories() {
    categoriesElement.innerHTML = categories.map(category => `
        <button
            class="category-btn ${activeCategory === category ? "active" : ""}"
            data-category="${category}">
            ${category}
        </button>
    `).join("");
}

function renderMenu() {
    const search = searchInput.value.trim().toLowerCase();

    const filtered = menu
        .map((item, index) => ({ ...item, index }))
        .filter(item => {
            const matchesCategory =
                activeCategory === "All" ||
                item.category === activeCategory;

            const matchesSearch =
                item.name.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search);

            return matchesCategory && matchesSearch;
        });

    if (filtered.length === 0) {
        menuGrid.innerHTML = "<p>No food items found.</p>";
        return;
    }

    menuGrid.innerHTML = filtered.map(item => `
        <article class="menu-card">
            <div class="dish-image">${item.emoji}</div>

            <div class="dish-info">
                <span class="dish-category">${item.category}</span>

                <h3>${item.name}</h3>

                <div class="dish-bottom">
                    <span class="price">${money(item.price)}</span>

                    <button
                        class="add-btn"
                        data-add="${item.index}"
                        aria-label="Add ${item.name} to cart">
                        +
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}

function addToCart(index) {
    cart[index] = (cart[index] || 0) + 1;
    renderCart();
}

function changeQuantity(index, amount) {
    cart[index] = (cart[index] || 0) + amount;

    if (cart[index] <= 0) {
        delete cart[index];
    }

    renderCart();
}

function removeFromCart(index) {
    delete cart[index];
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");

    const entries = Object.entries(cart);
    let total = 0;
    let count = 0;

    if (entries.length === 0) {
        cartItems.innerHTML =
            "<p>Your cart is empty. Add something delicious!</p>";
    } else {
        cartItems.innerHTML = entries.map(([index, quantity]) => {
            const item = menu[Number(index)];
            const subtotal = item.price * quantity;

            total += subtotal;
            count += quantity;

            return `
                <div class="cart-row">
                    <div>
                        <strong>${item.name}</strong>
                        <p>${money(item.price)} each</p>
                    </div>

                    <div class="quantity-controls">
                        <button data-change="${index}" data-amount="-1">−</button>
                        <span>${quantity}</span>
                        <button data-change="${index}" data-amount="1">+</button>
                    </div>

                    <div>
                        <strong>${money(subtotal)}</strong>
                        <button class="remove-btn" data-remove="${index}">
                            Remove
                        </button>
                    </div>
                </div>
            `;
        }).join("");
    }

    document.getElementById("cartCount").textContent = count;

document.getElementById("cartItemLabel").textContent =
    `${count} Items`;

document.getElementById("cartTotal").textContent = money(total);
}

categoriesElement.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    activeCategory = button.dataset.category;

    renderCategories();
    renderMenu();
});

menuGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");

    if (button) {
        addToCart(Number(button.dataset.add));
    }
});

document.getElementById("cartItems").addEventListener("click", event => {
    const changeButton = event.target.closest("[data-change]");
    const removeButton = event.target.closest("[data-remove]");

    if (changeButton) {
        changeQuantity(
            Number(changeButton.dataset.change),
            Number(changeButton.dataset.amount)
        );
    }

    if (removeButton) {
        removeFromCart(Number(removeButton.dataset.remove));
    }
});

searchInput.addEventListener("input", renderMenu);

document.getElementById("cartButton").addEventListener("click", () => {
    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("checkoutForm").addEventListener(
    "submit",
    async event => {
        event.preventDefault();

        const message = document.getElementById("orderMessage");
        const button = document.getElementById("placeOrder");

        if (Object.keys(cart).length === 0) {
            message.textContent = "Please add food to your cart first.";
            return;
        }

        const form = event.currentTarget;

        const payload = {
            customer_name: form.customer_name.value.trim(),
            phone: form.phone.value.trim(),
            address: form.address.value.trim(),
            notes: form.notes.value.trim() || null,

            // Menu IDs must match the backend's seeded menu order.
            items: Object.entries(cart).map(([index, quantity]) => ({
                menu_item_id: Number(index) + 1,
                quantity: quantity
            }))
        };

        button.disabled = true;
        button.textContent = "Submitting order...";
        message.textContent = "";

        try {
            const response = await fetch(`${API_URL}/api/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.detail || "Unable to place your order."
                );
            }

            message.textContent =
                `Order received! Order number: ${result.order_number}`;

            cart = {};
            renderCart();
            form.reset();

        } catch (error) {
            message.textContent =
                `${error.message} Check that the backend and MySQL are running.`;
        } finally {
            button.disabled = false;
            button.textContent = "Place Order";
        }
    }
);

renderCategories();
renderMenu();
renderCart();
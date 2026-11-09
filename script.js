const contactForm = document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value.trim();

    let response = document.getElementById("response");

    if (name.length < 3) {
        response.textContent = "Please enter a valid full name.";
        response.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        response.textContent = "Please enter a valid email address.";
        response.style.color = "red";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        response.textContent = "Phone number must contain exactly 10 digits.";
        response.style.color = "red";
        return;
    }

    if (subject === "") {
        response.textContent = "Please select a subject.";
        response.style.color = "red";
        return;
    }

    if (message.length < 10) {
        response.textContent = "Your message must contain at least 10 characters.";
        response.style.color = "red";
        return;
    }

    response.textContent = "Thank you! Your form has been submitted successfully.";
    response.style.color = "green";

 document.getElementById("contactForm").addEventListener   

});
}


// SHOPPING CART

function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " has been added to your cart!");
}

// CHECKOUT FUNCTION
const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let message = document.getElementById("orderMessage");

        if (cart.length === 0) {
            message.textContent = "Your cart is empty. Please add a product first.";
            return;
        }

        let name = document.getElementById("customerName").value;
        let payment = document.getElementById("paymentMethod").value;

        let total = 0;

        cart.forEach(function(item) {
            total += item.price * item.quantity;
        });

        message.textContent =
            "Thank you, " + name +
            "! Your order of UGX " + total.toLocaleString() +
            " has been placed. Payment: " + payment + ".";

        localStorage.removeItem("cart");
        checkoutForm.reset();
    });
}
s
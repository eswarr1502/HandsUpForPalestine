// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let formMessage = document.getElementById("form-message");

        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill out all fields.";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent = "Thank you! Your message has been sent.";
        this.reset();
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Display in console (for testing)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Show confirmation message on the page
    document.getElementById("responseMessage").innerText = "Thank you, " + name + "! We have received your message.";
});
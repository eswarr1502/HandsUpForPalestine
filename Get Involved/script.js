// Volunteer Form Validation
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("volunteer-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let interest = document.getElementById("interest").value;
        let terms = document.getElementById("terms").checked;
        let message = document.getElementById("form-message");

        if (name === "" || email === "" || phone === "" || interest === "") {
            message.style.color = "red";
            message.textContent = "Please fill out all fields.";
            return;
        }

        if (!terms) {
            message.style.color = "red";
            message.textContent = "You must agree to the terms and conditions.";
            return;
        }

        message.style.color = "green";
        message.textContent = "Thank you for signing up!";
        this.reset();
    });
});

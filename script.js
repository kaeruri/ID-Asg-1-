document.getElementById("contactForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var retype = document.getElementById("retypePassword").value;

    if (password !== retype) {
        event.preventDefault(); 
        alert("Please retype the same password");
    }
});
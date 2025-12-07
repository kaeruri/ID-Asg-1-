const form = document.querySelector('.contactusform');
const password = document.getElementById('password');
const retypePassword = document.getElementById('retypePassword');

const message = document.createElement('p');
message.style.color = 'red';
form.appendChild(message);


form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    message.textContent = '';

    
    if (password.value !== retypePassword.value) {
        message.textContent = "Pleae retype the same password";
        return; 
    }

    
    if (password.value.length < 6) {
        message.textContent = "Password must be at least 6 characters long";
        return;
    }

    
    message.style.color = 'green';
    message.textContent = "Form submitted successfully :)";
});
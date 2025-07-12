const form = document.getElementById('registration-form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirm-password')
const contactInput = document.getElementById('contact')
const error = document.getElementById('error')



form.addEventListener('submit', (event) => {
  event.preventDefault()

let message = []

if(nameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '' || confirmPasswordInput.value.trim() === '' || contactInput.value.trim() === ''){
  message.push('Please fill in all the fields')
}

if(!/^[A-Za-z\s]+$/.test(nameInput.value)){
  message.push('Name must contain only letters and spaces');
}

if(!emailInput.value.includes('@')){
    message.push('Please enter a valid email address')
}

if(passwordInput.value !== confirmPasswordInput.value){
    message.push('Passwords do not match')
}

if(!/^\d{10}$/.test(contactInput.value)){
    message.push('Please enter a valid 10-digit contact number')
}

if(message.length> 0){
    error.innerText = message.join(', ')
} else {
   error.innerText = ''; 
    alert('Registration successful!');
    form.reset();
}

})











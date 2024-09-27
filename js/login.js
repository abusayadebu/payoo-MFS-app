document.getElementById('login-button')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked')

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
    
})
document.getElementById('login-button')
.addEventListener('click', function(event){
    event.preventDefault();

    // get the phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber)
    // console.log(pinNumber)

    // bad way to validate the credentials (only for learning purpose)
    if(phoneNumber === '0123456789' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong Credencials');
    }
    
})
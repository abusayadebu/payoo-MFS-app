
// add money to the account

// step-1: add money button working or not
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    
    // step:2-- get money from input
    const inputMoney = document.getElementById('input-amount').value;
    const inputPin = document.getElementById('input-pin').value;

    console.log(inputMoney, inputPin)
    
})
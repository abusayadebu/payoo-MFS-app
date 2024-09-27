document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault()
    console.log('button clicked cashout')

    const inputCashOut = document.getElementById('input-cashout-amount').value;
    const inputCashOutPin = document.getElementById('input-cashout-pin').value;
    console.log(inputCashOut, inputCashOutPin)

    if(inputCashOutPin === '1234'){
        const currentBalance = document.getElementById('current-balance').innerText;
        console.log(currentBalance)

        const currentBalanceNumber = parseFloat(currentBalance);
        const inputCashOutNumber = parseFloat(inputCashOut);

        const updatedBalance = currentBalanceNumber - inputCashOutNumber;
        console.log(updatedBalance);

        document.getElementById('current-balance').innerText = updatedBalance;
    }
    else {
        alert('invalid credentials')
    }
})
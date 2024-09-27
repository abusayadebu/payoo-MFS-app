
// add money to the account

// step-1: add money button working or not
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    
    // step:2-- get money from input
    const inputMoney = document.getElementById('input-amount').value;
    console.log(inputMoney)
    const inputPin = document.getElementById('input-pin').value;

    console.log(inputPin);

    //step:3- validating pin but not the write way (for learning purpose)
    if(inputPin === '1234'){
        console.log('Adding Your Money to The Account')

        //step-4-- get the current balance
        const currentBalance = document.getElementById('current-balance').innerText;
        console.log(currentBalance)

        //step-5: add money to the current balance (currentBalance + inputMoney)
        const currentBalanceNumber = parseFloat(currentBalance);
        const inputMoneyNumber = parseFloat(inputMoney)

        const updatedBalance = currentBalanceNumber + inputMoneyNumber;
        console.log(updatedBalance);

        // step:6-- update the balance into UI/dom
        document.getElementById('current-balance').innerText = updatedBalance;

    }
    else{
        alert('Incorrect Pin, Please Provide the Correct Pin')
    }


    
})
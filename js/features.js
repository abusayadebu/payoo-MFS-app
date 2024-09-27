// show cashout form
document.getElementById('btn-show-cashout')
.addEventListener('click' , function(){
    console.log('button clciked')

    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('ad-money-form').classList.add('hidden');

})

// show add money form and hide the cashout form
    document.getElementById('btn-show-add-money').addEventListener('click' , function(){
    console.log('add money button clicked')

    document.getElementById('ad-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

})
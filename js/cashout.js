document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const amount=parseFloat(document.getElementById('input-cash-out').value)
    const pin=document.getElementById('input-cash-out-pin').value

    //  console.log(amount,pin)
    if(pin==='1234'){
        const balance= parseFloat(document.getElementById('account-balance').innerText)
        const newBalance=balance-amount
        document.getElementById('account-balance').innerText=newBalance
    }
})
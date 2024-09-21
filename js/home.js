document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const AddAmount=parseFloat(document.getElementById('input-add-money').value)
    const pin= document.getElementById('input-pin-number').value
    if(pin==='1234'){
       const balance= parseFloat(document.getElementById('balance').innerText )
       const newbalance=balance+AddAmount;
    document.getElementById('balance').innerText=newbalance;
       

    }
    else{
        alert("Enncifient balance")
    }
   
})

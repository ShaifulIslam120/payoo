document.getElementById('Login-btn').addEventListener('click',function(event){
    event.preventDefault()
   const phoneNumber=parseFloat( document.getElementById('phn-num').value);
   const password=document.getElementById('Pass').value;
   
   if(phoneNumber===1234 && password==="1234"){
    window.location.href = './home.html';

   }
   else{
    alert('Wrong number/password');
   }
})


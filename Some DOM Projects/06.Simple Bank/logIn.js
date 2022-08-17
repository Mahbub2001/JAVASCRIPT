document.getElementById('signInBtn').addEventListener('mouseover',function(){
    document.getElementById('signInBtn').style.backgroundColor='green';
    document.getElementById('signInBtn').style.color='white';
})
document.getElementById('signInBtn').addEventListener('mouseout',function(){
    document.getElementById('signInBtn').style.backgroundColor='';
    document.getElementById('signInBtn').style.color='';

})

document.getElementById('signInBtn').addEventListener('click',function(){

    const emailField = document.getElementById('email-input');
    const email = emailField.value;

    const passwordField = document.getElementById('password-input');
    const password = passwordField.value;

    emailField.value='';
    passwordField.value='';

    if(email === "mahbubturza@gmail.com" && password === "TTFM"){
        window.location.href = 'bank.html';
     }
     else{
         alert('Wrong Password or Username');
     }
})

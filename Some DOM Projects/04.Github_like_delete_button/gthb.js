document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-dlt');
    if (text === 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
});
document.getElementById('btn-dlt').addEventListener('click',function(){
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
});
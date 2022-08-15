document.getElementById('yes').addEventListener('click',function(){
    // document.getElementById('msg').innerText = "I LOVE YOU "
    sentMsg("msg");
});

function loveletter(){
    // document.getElementById('msg').innerText="I LOVE YOU";
    sentMsg("msg");
}

//Easier way
function sentMsg(id){
    document.getElementById(id).innerText="I LOVE YOU";
}
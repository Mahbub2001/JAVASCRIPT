let count = 0;
const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener('click',function(){
    count += 1;
    document.getElementById("count").innerText = count;
});


const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener('click',function(){
    if (count>0) {//if you don't want to get minus number you can use this condition otherwise you have to write only count-=1
        count -= 1;
    }
    document.getElementById("count").innerText = count;
});
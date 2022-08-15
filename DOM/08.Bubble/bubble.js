
//Event Bubble down to up---by default false will be there
// document.getElementById('grandparent').addEventListener('click',function(){
//     console.log("grandprent clicked");
// })
// document.getElementById('parent').addEventListener('click',function(event){
//     console.log("parent clicked");
//     event.stopPropagation();//for stopping
// })
// document.getElementById('child').addEventListener('click',function(){
//     console.log("child clicked");
// })




//Event capture...up to down

document.getElementById('grandparent').addEventListener('click',function(){
    console.log("grandprent clicked");
},true);
document.getElementById('parent').addEventListener('click',function(event){
    console.log("parent clicked");
    event.stopPropagation();//for stopping
},true);
document.getElementById('child').addEventListener('click',function(){
    console.log("child clicked");
},true);

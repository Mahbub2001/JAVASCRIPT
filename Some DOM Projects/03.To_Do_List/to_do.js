let count = 0;
document.getElementById('input-btn').addEventListener("click",function(){
    count++;
    const inputValue = document.getElementById("input-value").value;
    
    const mainContainer = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML=`
    <th scope="row">${count}</th> 
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-primary delete-btn">Delete</button>
    <button class="btn btn-secondary">Edit</button>
    </td>
    `;
    mainContainer.appendChild(tableContainer);
    document.getElementById('input-value').value='';//empty the input box

    const deleteBtn = document.getElementsByClassName("delete-btn")

    for (let button of deleteBtn) {
        button.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.display="none"
        });
    }
    document.getElementById('removeAllBtn').addEventListener('click',function(){
        mainContainer.innerHTML='';
    })
    // document.getElementById('removeAllBtn').addEventListener('click',function(){
    //     document.querySelector('#content-container').innerHTML='';
    // })
});


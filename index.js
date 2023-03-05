let add_btn = document.getElementById("add_btn")
add_btn.addEventListener('click',addTodo)
let parentList = document.getElementById('parentList')
function addTodo(e){
if(parentList.children[0].className == "emptyList"){
    parentList.children[0].remove()
}
let currentBtn = e.currentTarget
let currentIuput = currentBtn.previousElementSibling
let currentTodo = currentIuput.value


let newLi = document.createElement('li')
newLi.className = "list-group-item"
newLi.innerHTML = `<h3 class = "flex-grow-1">${currentTodo}</h3> 
        <div><button class = "btn btn-warning" onclick = "editTodo(this)">Edit</button>
        <button class = "btn btn-danger" onclick="removeTodo(this)" >Remove</button></div>`

parentList.appendChild(newLi)
}

function removeTodo(currElement){
    currElement.parentElement.parentElement.remove()
}

function editTodo(currElement){
    if(currElement.textContent == "Done"){
        currElement.textContent = "Edit"
        console.log(currElement.parentElement.previousElementSibling.value)
        let currTodoName = currElement.parentElement.previousElementSibling.value
        let currHeading = document.createElement("h3")
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currTodoName

        currElement.parentElement.parentElement.replaceChild(currHeading,currElement.parentElement.previousElementSibling)
    }
    else{
        currElement.textContent = "Done"
        let currTodoName = currElement.parentElement.previousElementSibling.textContent
        let currInput = document.createElement("input")
        currInput.type = "text"
        currInput.className = "form-control"
        currInput.placeholder = "Edit todo"
        currInput.value = currTodoName

    currElement.parentElement.parentElement.replaceChild(currInput,currElement.parentElement.previousElementSibling)
    }   
}
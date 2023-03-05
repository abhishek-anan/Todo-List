let add_btn = document.getElementById("add_btn")
add_btn.addEventListener('click',addTodo)
let parentList = document.getElementById('parentList')
function addTodo(e){
if(parentList.children[0].className == "emptyList"){
    parentList.children[0].remove()
}
let currentBtn = e.currentTarget
let currentIuput = currentBtn.previousElementSibling
let currentChapter = currentIuput.value


let newLi = document.createElement('li')
newLi.className = "list-group-item"
newLi.innerHTML = `<h3 class = "flex-grow-1">${currentChapter}</h3> 
        <div><button class = "btn btn-warning" onclick = "editTodo(this)">Edit</button>
        <button class = "btn btn-danger" onclick="removeTodo(this)" >Remove</button></div>`

parentList.appendChild(newLi)
}

function removeTodo(currElement){
    currElement.parentElement.remove()
    if(parentList.children.length <= 0){
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyList")
        newEmptyMsg.textContent = "Nothing is Here!! Please add new Chapter"
        parentList.appendChild(newEmptyMsg)
    }
}

function editTodo(currElement){
    if(currElement.textContent == "Done"){
        currElement.textContent = "Edit"
        let currChapterName = currElement.previousElementSibling.value
        let currHeading = document.createElement("h3")
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currChapterName

        currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling)
    }
    else{
        currElement.textContent = "Done"
    let currChapterName = currElement.previousElementSibling.textContent
    let currInput = document.createElement("input")
    currInput.type = "text"
    currInput.className = "form-control"
    currInput.placeholder = "Chapter Name"
    currInput.value = currChapterName

    currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling)
    }   
}
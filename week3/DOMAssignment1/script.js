let todoList = [];
let count = 0;
const addBtn = document.getElementById("add-btn");

function addTodo(){
    const todo = document.getElementById("add-task");
    let mytodo = todo.value.replace(/\s+/g, " ").trim();
    if(mytodo===""){
        alert("Please enter a task");
        return;
    }
    count++;
    todoList.push({
        id: `todo-${count}`,
        title: mytodo,
        isDone: false,
        isEditing: false,
    })
    render();
    todo.value = "";
}

function clickedonCheckBox(id){
    for(let i=0; i<todoList.length; i++){
        if(todoList[i].id===id){
            todoList[i].isDone = !todoList[i].isDone;
        }
    }
    render();
}

function editTodo(id){
    for(let i=0; i<todoList.length; i++){
        if(todoList[i].id===id){
            const ip = document.getElementById("edit-input" + id);
            if(todoList[i].isEditing){
                if(ip.value.trim()!=="")
                todoList[i].title = ip.value;
                else alert("Please enter non-empty task");
            }
            todoList[i].isEditing = !todoList[i].isEditing;
        }
    }
    render();
}

function deleteTodo(id){
    for(let i=0; i<todoList.length; i++){
        if(todoList[i].id===id) todoList.splice(i, 1);
    }
    render();
}

function createTodoComponent(task){
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let h3 = document.createElement("h3");
    let input = document.createElement("input");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let checkbox = document.createElement("input");
    
    checkbox.type = "checkbox";
    checkbox.id = "cb";
    checkbox.checked = task.isDone;
    checkbox.onclick = ()=>{
        clickedonCheckBox(task.id);
    };

    
    h3.innerHTML = task.title;
    if(task.isDone){
        h3.style.textDecoration = "line-through";
    }
    else h3.style.textDecoration = "none";

    input.type = "text";
    input.id = "edit-input" + task.id;
    input.value = task.title;

    deleteBtn.innerHTML = "Delete";
    //Method 1
    deleteBtn.onclick = () => deleteTodo(task.id);
    //Method 2 Using Set Attribute
    // deleteBtn.setAttribute("onclick", "deleteTodo(" + task.id + ")");
    editBtn.onclick = () => editTodo(task.id);

    div.id = task.id;
    div2.className = "checkbox-title";
    div3.className = "buttons";
    div2.appendChild(checkbox);
    if(task.isEditing){
        div2.appendChild(input);
        editBtn.innerHTML = "Save";
    }
    else {
        div2.appendChild(h3);
        editBtn.innerHTML = "Edit";
    }
    div3.appendChild(editBtn);
    div3.appendChild(deleteBtn);
    div.appendChild(div2);
    div.appendChild(div3);
    return div;
}

function render(){
    document.querySelector(".todos").innerHTML = "";
    for(let i=0; i<todoList.length; i++){
        const element = createTodoComponent(todoList[i]);
        document.querySelector(".todos").appendChild(element);
    }
}



addBtn.addEventListener("click", addTodo);
const todoForm = document.querySelector(".todo_form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo_list");

const TODO_LS = "toDo";
 
// let 나중에 바뀔 부분
let toDo = [];

// 리스트 항목 삭제하기
function deleteTodo(e){
    console.log(e.target.parentNode);
    const btn = e.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodo = toDo.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    toDo = cleanTodo;
    saveTodo();
    console.log(cleanTodo);
}

// 완료된 목록
function completeTodo(e){
    console.log(e.target.parentNode);
    const btn = e.target;
    const li = btn.parentNode;    
    li.classList.toggle("chked");
    
    toDo = chkTodo;
    saveTodo();
    console.log(chkTodo);
}

// 추가된 리스트 string형태로 저장
function saveTodo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));    
}

// To do list 작성 시 출력
function printTodo(text){
    console.log(text);
    
    const todoLi = document.createElement("li");


    const chkBtn = document.createElement("span");
    chkBtn.classList.add("material-icons");
    chkBtn.innerHTML = 'done_outline';
    chkBtn.addEventListener("click", completeTodo);
    
    const delBtn = document.createElement("span");
    delBtn.classList.add("material-icons");
    delBtn.innerHTML = 'delete_outline';
    delBtn.addEventListener("click", deleteTodo);

    const span = document.createElement("span");
    span.classList.add("left");
    const newId = toDo.length+1;

    
    
    span.innerText = text;
    todoLi.appendChild(span);
    todoLi.appendChild(chkBtn);
    todoLi.appendChild(delBtn);
    todoLi.id = newId;
    todoList.appendChild(todoLi);

    const todoObj = {
        text : text,
        id : newId

    };
    toDo.push(todoObj);
    saveTodo();
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = todoInput.value;
    if(currentValue == ''){
        alert('한 글자 이상 입력해주세요.');
    }else{
        printTodo(currentValue);
        todoInput.value = ''; // 입력창 초기화
    }
        
}


function loadTodo(){
    const loadedtoDo = localStorage.getItem(TODO_LS);
    if(loadedtoDo != null){
        const parsedTodo = JSON.parse(loadedtoDo);
        console.log(parsedTodo);
        parsedTodo.forEach(function(todo){
            console.log(todo.text);
            printTodo(todo.text);
        });
    }
}
 
// 리스트 불러오기
function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
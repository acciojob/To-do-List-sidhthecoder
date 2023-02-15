//your code here
var todo=document.getElementById("newTodoInput");
var btn= document.getElementById("addTodoBtn");
var ol=document.getElementById("todoList");

function addTodo(){
	if(todo.value){
     var list=document.createElement("li");
		list.textContent=todo.value;
	     ol.appendChild(list);
		todo.value="";
	}
}
btn.addEventListener('click',addTodo);

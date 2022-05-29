const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};


function addTask(description) {
//Cria um item da lista [div+input+label+texto]
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

//Cria atributos e classe
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);
	taskLabel.setAttribute('for', description);
	
	taskContainer.classList.add('task-item');
	
//Encerra a criação dos elementos do item da lista
	taskContainer.appendChild(newTask);
	taskLabel.appendChild(taskDescriptionNode);
	taskContainer.appendChild(taskLabel);
	taskList.appendChild(taskContainer);
	
}

// Troca para modo noturno :)

let nightMode = document.getElementById("nightmode");
let bodyNightMode = document.getElementsByTagName("body");

nightMode.addEventListener("change", function() {
	if (nightMode.checked == true) {
	  document.documentElement.setAttribute("style", "background-color: #1f1f1f;");
	  bodyNightMode[0].setAttribute("style", "color: white;");
  
	} else {
	  document.documentElement.setAttribute("style", "background-color: white;");
	  bodyNightMode[0].setAttribute("style", "color: black;");
	}
  });
let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  const taskElement = document.createElement('li');
  taskElement.classList.add('task');


  /*innerHTML returns = The text content of the element, including all spacing and inner HTML tags.
   https://www.w3schools.com/jsref/prop_html_innerhtml.asp*/
  taskElement.innerHTML = `
    <img src="${task.imgUrl}" alt="${task.name}" class="task__image"/>
    <div class="task__info">
      <h4 class="task__name">${task.name}</h4>
      <p class="task__owner">Owner: ${task.owner}</p>
      <p class="task__description">${task.description}</p>
      <button class="task__delete-button">Delete</button>
    </div>
  `;

  taskElement.querySelector('.task__delete-button').addEventListener('click', () => deleteTaskHandler(taskElement));

  return taskElement;
}

function loadTasks() {
  const taskList = document.querySelector('ul');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    taskList.appendChild(createTaskComponent(task));
  });
}

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {
  alert(`
    Name: ${newTask.name}
    Owner: ${newTask.owner}
    Description: ${newTask.description}
    Image URL: ${newTask.imgUrl}
  `);
}

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario

function addTaskHandler(event) {
  event.preventDefault();

  const name = document.getElementById('nameInput').value;
  const owner = document.getElementById('ownerInput').value;
  const description = document.getElementById('descriptionInput').value;
  const imgUrl = document.getElementById('imgUrlInput').value;

  const newTask = {
    id: currentIdNumber++,
    name,
    owner,
    description,
    imgUrl
  };

  addTaskAlert(newTask);
  tasks.push(newTask);
  loadTasks();
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {
  const taskName = taskElement.querySelector('.task__name').textContent;
  tasks = tasks.filter(task => task.name !== taskName);
  taskElement.remove();
  redirectWhenNoTask();
}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  tasks = [];
  loadTasks();
  redirectWhenNoTask();
}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  if (tasks.length === 0) {
    window.location.href = 'https://www.youtube.com';
  }
}


// addEvenListner para add a click event to a <button> element
document.querySelector('.main__form').addEventListener('submit', addTaskHandler);
document.querySelector('.clear-button').addEventListener('click', deleteAllTaskHandler);


loadTasks();


//li es cada elemento y ul es como el contenedor 


import './style.css';

let list = [
  {
    description: 'Clean Room',
    completed: false,
    index: 2
  },
  {
    description: 'Wash Dishes',
    completed: false,
    index: 4
  },
  {
    description: 'Make Dinner',
    completed: false,
    index: 3
  },
  {
    description: 'first but last',
    completed: false,
    index: 1
  }
];

function display() {
  list.sort((x, y) => {
    return x.index - y.index;
  });

  const title = document.createElement('h4');
  title.innerHTML = "Today's To Do";
  
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'task';
  input.id = 'newTask';
  input.placeholder = 'Add to your list...';
  const listElements = document.createElement('ul');
  listElements.classList.add('listElements');

  listElements.appendChild(title);
  listElements.appendChild(input);

  list.forEach(element => {
    const elementList = document.createElement('li');
    const description = document.createElement('span');
    description.innerHTML = element.description; 
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    elementList.classList.add('elementList');
    elementList.appendChild(checkBox);
    elementList.appendChild(description);
    listElements.appendChild(elementList);
  })

  const button = document.createElement('button');

  button.classList.add('delete-button');
  button.innerHTML = 'Clear all completed';
  button.type = 'button';
  listElements.appendChild(button);

  const listPlacehold = document.getElementById('list-placeholder');
  listPlacehold.appendChild(listElements);
  console.log(listElements);
}

display();

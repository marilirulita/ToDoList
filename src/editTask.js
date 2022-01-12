const editTask = (description, element) => {
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  // const delet = document.createElement('input');//b
  // delet.type = 'button';
  // delet.value = 'delete';
  taskInput.value = description.innerHTML;
  description.parentNode.replaceChild(taskInput, description);
  // input.parentNode.appendChild(delet);
  taskInput.focus();

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      console.log('you press enter!');
      description.innerHTML = taskInput.value;
      taskInput.parentNode.replaceChild(description, taskInput);
      element.description = taskInput.value;
      console.log(element.description);
  //     e.parentNode.removeChild(b);
  }
  });
}

export {editTask as default};
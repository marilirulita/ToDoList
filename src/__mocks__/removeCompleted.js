const checkStatus = (element, checkBox, span) => {
  element.completed = checkBox.checked;
  if (checkBox.checked) {
    span.classList.add('complete');
  } else {
    span.classList.remove('complete');
  }
};

class CheckLocal {
  constructor() {
    if (localStorage.getItem('list') === null) {
      this.list = [];
    } else {
      this.list = JSON.parse(localStorage.getItem('list'));
    }
  }

  saveStorage = () => {
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  doneTask = (index) => {
    const task = this.list[index];
    task.completed = true;
    this.saveStorage();
  }
}

const completed = (list) => {
  const newList = list.filter((task) => task.completed === false);
  return newList;
};

export { completed, checkStatus, CheckLocal };
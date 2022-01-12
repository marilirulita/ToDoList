import display from './index.js';
import saveList from './saveLocal.js';

const deleteComplete = (list) => {
  const newList = list.filter((task) => task.completed === false);
  console.log(newList);
  list = newList;
  updatePosition(list);
  saveList(list);
  display(list);
}

const deletElement = (list, element) => {
  list.forEach(ele => {
    if(ele.index === element.index) {
      const indice = list.indexOf(ele);
      list.splice(indice, 1);
      updatePosition(list);
      saveList(list);
      display(list);
      console.log(list);
    }
  });
}
  //     const local = window.localStorage.getItem('tasklist');
  //     const list = JSON.parse(local);
     
const updatePosition = (newList) => {
  newList.forEach((task, id) => {
    console.log(id);
    task.index = id;
  });
}

export {deleteComplete, deletElement};
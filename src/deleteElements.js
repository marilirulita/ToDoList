/* eslint-disable import/no-cycle */
import display from './display.js';
import saveList from './saveLocal.js';

const updatePosition = (newList) => {
  newList.forEach((task, id) => {
    task.index = id;
  });
};

const deleteComplete = (list) => {
  const newList = list.filter((task) => task.completed === false);

  list = newList;
  updatePosition(list);
  saveList(list);
  display(list);
};

const deletElement = (list, element) => {
  list.forEach((ele) => {
    if (ele.index === element.index) {
      const indice = list.indexOf(ele);
      list.splice(indice, 1);
      updatePosition(list);
      saveList(list);
      display(list);
    }
  });
};

export { deleteComplete, deletElement };
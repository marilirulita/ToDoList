import display from './index.js';

const deleteComplete = (list) => {
  const newList = list.filter((task) => task.completed === false);
  console.log(newList);
  list = newList;
  updatePosition(list);
  display(list);
}
  //     const local = window.localStorage.getItem('tasklist');
  //     const list = JSON.parse(local);
        //    updatePosition(newList);
    //   showItems(newList);
    //   saveList(newList);
     
const updatePosition = (newList) => {
  newList.forEach((task, id) => {
    console.log(id);
    task.index = id;
  });
}

export {deleteComplete as default};
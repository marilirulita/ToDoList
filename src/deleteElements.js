import display from './index.js';

const deleteComplete = (list) => {
      
  //     const local = window.localStorage.getItem('tasklist');
  //     const list = JSON.parse(local);
       const newList = list.filter((task) => task.completed === false);
       console.log(newList);
       list = newList;
       display(list);
   //    updatePosition(newList);
    //   showItems(newList);
    //   saveList(newList);
    return list;
     }

export {deleteComplete as default};
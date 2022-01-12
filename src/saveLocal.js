const saveList = (list) => {
  console.log('you save a list');
  window.localStorage.setItem('tasklist', JSON.stringify(list));
};

export {saveList as default};
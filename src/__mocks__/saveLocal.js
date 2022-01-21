const saveList = (list) => {
  window.localStorage.setItem('tasklist', JSON.stringify(list));
};

export { saveList as default };
const checkStatus = (element, checkBox) => {
  element.completed = checkBox.checked;
};

const completed = (list) => {
  const newList = list.filter((task) => task.completed === false);
  return newList;
};

export { completed, checkStatus };
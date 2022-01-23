const checkStatus = (element, checkBox, span) => {
  element.completed = checkBox.checked;
  if (checkBox.checked) {
    span.classList.add("complete");
  } else {
    span.classList.remove("complete");
  }
};

const completed = (list) => {
  const newList = list.filter((task) => task.completed === false);
  return newList;
};

export { completed, checkStatus };

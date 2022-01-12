const list = () => {
  const list = [];
  return list;
}

window.onload = () => {
  const local = window.localStorage.getItem('tasklist');
  if (local != null) {
    console.log('no data');
  //  tasksList = JSON.parse(local);
  }
};
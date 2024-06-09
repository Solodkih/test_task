let tasks = [
  { done: false, name: 'One', id: 1, showTasks: true },
  { done: false, name: 'Two', id: 2, showTasks: true },
  { done: false, name: 'Three', id: 3, showTasks: true },
];

let id = 3;

export function getAllTasksFetch() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
}

export function addTaskFetch(task) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      task.id = ++id;
      resolve(task);
    }, 1000);
  });
}

export function deleteTaskFetch(id) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(id);
    }, 1000);
  });
}

export function changeTaskFetch(task) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(task);
    }, 1000);
  });
}

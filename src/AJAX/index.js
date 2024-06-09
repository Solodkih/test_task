let tasks = [
  {
    done: false,
    text: 'One',
    answer: '1',
    idTask: 1,
    idUser: 22,
    lastDate: '2024-01-13',
  },
  {
    done: false,
    text: 'Two',
    answer: '2',
    idTask: 2,
    idUser: 22,
    lastDate: '2024-01-13',
  },
  {
    done: false,
    text: 'Three',
    answer: '3',
    idTask: 3,
    idUser: 22,
    lastDate: '2024-01-13',
  },
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
      task.idTask = ++id;
      resolve(task);
    }, 1000);
  });
}

export function deleteTaskFetch(idTask) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(idTask);
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

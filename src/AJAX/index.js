let tasks = [
  {
    done: false,
    text: 'One One One One One One One One One One One One One One One One One One One One One One One One One One One One One One One One One  One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On One One One One One One One One One One One One One One One One One One One One On',
    answer: '1',
    idTask: 1,
    idUser: 22,
    lastDate: '2024-01-13',
  },
  {
    done: false,
    text: 'Two',
    answer: '',
    idTask: 2,
    idUser: 22,
    lastDate: '2024-01-13',
  },
  {
    done: false,
    text: 'Three',
    answer: '',
    idTask: 3,
    idUser: 33,
    lastDate: '2024-01-13',
  },
];

let id = 3;
let UserId = 22;

let passwordUser = '111';
let usernameUser = '222';

export function loginFetch({ password, username }) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (password === passwordUser && usernameUser === username) {
        resolve(UserId);
      }
      reject();
    }, 1000);
  });
}

export function logoutFetch() {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
  }

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

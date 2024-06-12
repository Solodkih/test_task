let tasks = [
  {
    done: false,
    text: 'Добрый День! Около 14 квартиры, разбили бутылку, не могли бы вы убрать ее?',
    answer: 'Добрый день, мастер был там 5 минут назад, никакого стекла нет!',
    idTask: 1,
    idUser: 1,
    lastDate: '2024-01-13',
  },
  {
    done: false,
    text: 'Добрый день, подростки снова качались на поручнях бокового выхода. Он снова отвалился, нужно приварить.',
    answer:
      'В понедельник поставлю вопрос о сварщике на планерке, но заварим не раньше вторника. Подростков гоняли уже не раз, нужен серьезный разговор с родителями.',
    idTask: 2,
    idUser: 2,
    lastDate: '2024-01-13',
  },
  {
    done: false,
    text: 'СНОВА ОТКЛЮЧИЛИ ВОДУ!! КОГДА ЭТО ПРЕКРАТИТСЯ',
    answer:
      'Авария на линии, сказали к утру сделают. Машина с водой у боковова входа.',
    idTask: 3,
    idUser: 3,
    lastDate: '2024-01-13',
  },
];

const arrayUser = [
  { username: 'user1', password: '111', id: 1 },
  { username: 'user2', password: '222', id: 2 },
  { username: 'user3', password: '333', id: 3 },
  { username: 'user4', password: '444', id: 4 },
];

export function loginFetch({ password, username }) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      arrayUser.forEach((elem) => {
        if (password === elem.password && username === elem.username) {
          resolve(elem.id);
        }
      });
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

export function deleteTaskFetch({ idUser, idTask }) {
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

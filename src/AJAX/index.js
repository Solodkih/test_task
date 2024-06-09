let tasks = [
    { done: false, name: 'One', id: 1, showTasks: true },
    { done: false, name: 'Two', id: 2, showTasks: true },
    { done: false, name: 'Three', id: 3, showTasks: true },
]

export function getAllTasksFetch() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
}

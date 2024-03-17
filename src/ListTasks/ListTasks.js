import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask } from '../redux/tasksSlice';

import { Task } from '../Task/Task';
import useFilterTasks from './useFilterTasks';
import useLocalStorage from './useLocalStorage';

export function ListTasks() {
  const allTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const [showCheckedTask, showUnCheckedTask, showAllTasks, showTasks] =
    useFilterTasks(allTasks);

  const [clearStorage, saveTasksToLocalStorage] = useLocalStorage(allTasks);

  const handleOnChange = function (event) {
    setTask(event.target.value);
  };

  const handleOnClick = function (e) {
    dispatch(addTask({ name: task, id: crypto.randomUUID(), done: false }));
    setTask('');
  };

  return (
    <>
      Список задач
      <ul>
        {showTasks.map((elem) => {
          return <Task {...elem} showTasks={showTasks} />;
        })}
      </ul>
      <input type="text" onChange={handleOnChange} value={task} />
      <button onClick={handleOnClick}>Добавить задачу</button>
      <button onClick={saveTasksToLocalStorage}>Сохранить в локал сторадж</button>
      <button onClick={clearStorage}>Сброс хранилища</button>
      <button onClick={showCheckedTask}>Выполненные</button>
      <button onClick={showUnCheckedTask}>Не выполненные</button>
      <button onClick={showAllTasks}>Все задачи</button>
    </>
  );
}

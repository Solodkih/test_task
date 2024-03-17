import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask, setAllTasks } from './redux/tasksSlice';

import { Task } from './Task';
import useFilterTasks from './useFilterTasks';

export function ListTasks() {
  const allTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [saveDragId, setSaveDragId] = useState(0);

  const [filter, setFilter, showTasks] = useFilterTasks(allTasks);


  useEffect(() => {
    const json = localStorage.getItem('array-tasks');
    const array = JSON.parse(json);
    if (array) {
      dispatch(setAllTasks(array));
    }
  }, []);

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
          return (
            <Task
              {...elem}
              setSaveDragId={setSaveDragId}
              saveDragId={saveDragId}
              showTasks={showTasks}
            />
          );
        })}
      </ul>
      <input type="text" onChange={handleOnChange} value={task} />
      <button onClick={handleOnClick}>Добавить задачу</button>
      <button
        onClick={() => {
          const json = JSON.stringify(arrayTasks);
          localStorage.setItem('array-tasks', json);
        }}
      >
        Сохранить в локал сторадж
      </button>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Сброс хранилища
      </button>
      <button
        onClick={() => {
          setFilter({ check: !filter.check, uncheck: false });
        }}
      >
        Выполненные
      </button>
      <button
        onClick={() => {
          setFilter({ check: false, uncheck: !filter.uncheck });
        }}
      >
        Не выполненные
      </button>
      <button
        onClick={() => {
          setFilter({ check: false, uncheck: !filter.uncheck });
        }}
      >
        Все задачи
      </button>
    </>
  );
}

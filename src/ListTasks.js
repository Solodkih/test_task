import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, switchChecked, addTask } from './redux/tasksSlice';

export function ListTasks() {
  const arrayTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

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
        {arrayTasks.map((elem) => {
          return <ItemList {...elem} dispatch={dispatch} />;
        })}
      </ul>
      <input type="text" onChange={handleOnChange} value={task} />
      <button onClick={handleOnClick}>Добавить задачу</button>
    </>
  );
}

const ItemList = function ({ done, name, id, dispatch }) {
  const handleOnClick = function (e) {
    dispatch(switchChecked({ id, done: !done }));
  };
  return (
    <li key={id} onClick={handleOnClick}>
      <input id={id} checked={done} type="checkbox" />
      <label>{name}</label>
    </li>
  );
};

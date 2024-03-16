import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllTasks,
  switchChecked,
  addTask,
  removeTask,
  changeName,
  setAllTasks,
} from './redux/tasksSlice';

export function ListTasks() {
  const arrayTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

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
        {arrayTasks.map((elem) => {
          return <ItemList {...elem} dispatch={dispatch} />;
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
    </>
  );
}

const ItemList = function ({ done, name, id, dispatch }) {
  const [canChange, setChange] = useState(false);
  const [value, setValue] = useState(name);

  const handleClickCheckbox = function (e) {
    dispatch(switchChecked({ id, done: !done }));
  };

  const handleClickRemoveTask = function (e) {
    dispatch(removeTask(id));
  };

  const handleClickChangeTask = function (e) {
    setChange(!canChange);
    setValue(name);
  };

  const handleClickSaveTask = function (e) {
    dispatch(changeName({ id, name: value }));
    setChange(false);
  };

  const handleChangeChangeTask = function (e) {
    setValue(e.target.value);
  };

  return (
    <li key={id}>
      <input id={id} checked={done} type="checkbox" onClick={handleClickCheckbox} />
      {!canChange && <label onClick={handleClickCheckbox}>{name}</label>}
      {canChange && (
        <input id={id} type="text" onChange={handleChangeChangeTask} value={value} />
      )}
      <button onClick={canChange ? handleClickSaveTask : handleClickChangeTask}>
        {canChange ? 'Сохранить' : 'Править'}
      </button>
      <button onClick={canChange ? handleClickChangeTask : handleClickRemoveTask}>
        {canChange ? 'Отменить правку' : 'Удалить задачу'}
      </button>
    </li>
  );
};

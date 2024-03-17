import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  switchChecked,
  removeTask,
  changeName,
  setAllTasks,
} from './redux/tasksSlice';

export const Task = function ({
  done,
  name,
  id,
  saveDragId,
  setSaveDragId,
  showTasks,
}) {
  const dispatch = useDispatch();

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
    <li
      key={id}
      draggable="true"
      onDragStart={(e) => {
        setSaveDragId(id);
      }}
      onDragLeave={(e) => {}}
      onDragEnd={(e) => {
        e.currentTarget.style.background = 'blue';
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.currentTarget.style.background = 'red';
      }}
      onDrop={(e) => {
        const newArray = [...showTasks];
        const indexDeleteElem = newArray.findIndex((elem) => {
          return elem.id === saveDragId;
        });
        const [elem] = newArray.splice(indexDeleteElem, 1);
        const indexPutElem = newArray.findIndex((elem) => {
          return elem.id === id;
        });
        newArray.splice(indexPutElem, 0, elem);
        dispatch(setAllTasks(newArray));

        e.preventDefault();
      }}
    >
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

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, switchChecked } from './redux/tasksSlice';

export function ListTasks() {
  const arrayTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();

  return (
    <>
      Список задач
      <ul>
        {arrayTasks.map((elem) => {
          return <ItemList {...elem} dispatch={dispatch} />;
        })}
      </ul>
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

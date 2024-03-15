import React from 'react';
import { useSelector } from 'react-redux';
import { getAllTasks } from './redux/tasksSlice';

export function ListTasks() {
  const arrayTasks = useSelector(getAllTasks);

  return (
    <>
      Список задач
      <ul>
        {arrayTasks.map((elem) => {
          return <ItemList {...elem} />;
        })}
      </ul>
    </>
  );
}

const ItemList = function ({ done, name, id }) {
  return (
    <li>
      <input id={id} checked={done} type="checkbox" />
      <label htmlFor={id}>{name}</label>
    </li>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';
import { getAllTasks } from './redux/tasksSlice';

export function ListTasks() {
  const arrayTasks = useSelector(getAllTasks);
  return (
    <>Список задач
    <ul>
      {arrayTasks.map((elem) => {
        return <li>{elem.name}</li>;
      })}
    </ul>
    </>
  );
}


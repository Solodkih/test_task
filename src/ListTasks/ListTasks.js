import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask, dowloadAllTasks } from '../redux/tasksSlice';
import { logout, getUserId } from '../redux/userSlice';

import { Task } from '../Task/Task';

export function ListTasks({ setShow }) {
  const userId = useSelector(getUserId);
  const allTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  useEffect(() => {
    dispatch(dowloadAllTasks());
  }, []);

  const handleOnChange = function (event) {
    setTask(event.target.value);
  };

  const handleOnClick = function (e) {
    dispatch(addTask({ text: task, done: false, idUser: userId }));
    setTask('');
  };

  return (
    <div className="w-75 min-vh-100">
      <div className="d-flex justify-content-between py-4 px-3">
        <h1 className="h1 text-primary">Управляющая компания "КОМФОРТ" </h1>
        {!userId && (
          <button
            type="button"
            className="btn btn-primary rounded-0 text-light"
            onClick={() => {
              setShow((show) => {
                return !show;
              });
            }}
          >
            Вход
          </button>
        )}
        {userId && (
          <button
            type="submit"
            className="btn btn-primary rounded-0 text-light"
            onClick={(event) => {
              event.preventDefault();
              dispatch(logout());
            }}
          >
            Выйти
          </button>
        )}
      </div>
      {userId && (
        <section className="p-3 bg-body-secondary mx-3">
          <h2 className="h2 text-primary">Новое задание</h2>
          <textarea
            className="form-control border border-primary text-primary me-3 mb-3 rounded-0 fs-5"
            placeholder="Добавить задание"
            type="text"
            onChange={handleOnChange}
            value={task}
          />
          <div className="text-end">
            <button
              className="btn btn-primary m-2 rounded-0"
              onClick={handleOnClick}
            >
              Добавить задание
            </button>
          </div>
        </section>
      )}
      <h2 className="h2 text-primary text-left pt-3 ">Список заданий</h2>
      <ul className="list-group">
        {allTasks.map((elem) => {
          return <Task key={elem.idTask} {...elem} />;
        })}
      </ul>
    </div>
  );
}

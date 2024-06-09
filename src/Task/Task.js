import React from 'react';

import useChangeTask from './useChangeTask';
import { getUserId } from '../redux/userSlice';
import { useSelector } from 'react-redux';

import './task.scss';

export const Task = function ({ text, idTask, idUser, lastDate, answer }) {
  const userId = useSelector(getUserId);
  const [
    handleClickChangeTask,
    handleChangeTextTask,
    handleChangeAnswerTask,
    handleClickRemoveTask,
    handleClickSaveTask,
    canChange,
    textValue,
    answerValue,
  ] = useChangeTask(text, answer, idTask);
  return (
    <li className="list-group-item list-group-item-action" key={idTask}>
      <label htmlFor={`task-${idTask}`} className="form-label">
        Задача
      </label>
      <textarea
        type="text"
        className="form-control"
        id={idTask}
        onChange={handleChangeTextTask}
        value={textValue}
        aria-describedby="task"
        disabled={!canChange}
      />
      {answer && (
        <label htmlFor={idTask} className="form-label">
          Комментарий
        </label>
      )}
      {answer && (
        <textarea
          type="text"
          className="form-control"
          id={idTask}
          onChange={handleChangeAnswerTask}
          value={answerValue}
          aria-describedby="task"
          disabled={true}
        />
      )}
      {idUser === userId && (
        <button onClick={canChange ? handleClickSaveTask : handleClickChangeTask}>
          {canChange ? (
            <img src="./save-svgrepo-com.svg" alt="save" />
          ) : (
            <img src="./pen-svgrepo-com.svg" alt="change" />
          )}
        </button>
      )}

      {idUser === userId && (
        <button onClick={canChange ? handleClickChangeTask : handleClickRemoveTask}>
          {canChange ? (
            <img src="./cross-svgrepo-com.svg" alt="cansel" />
          ) : (
            <img src="./delete-2-svgrepo-com.svg" alt="remove" />
          )}
        </button>
      )}
    </li>
  );
};

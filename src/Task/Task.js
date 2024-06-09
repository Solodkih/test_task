import React from 'react';

import useChangeTask from './useChangeTask';
import './task.scss';

export const Task = function ({ done, name, id }) {
  const [
    handleClickCheckbox,
    handleClickRemoveTask,
    handleClickChangeTask,
    handleClickSaveTask,
    handleChangeChangeTask,
    canChange,
    value,
  ] = useChangeTask(done, name, id);

 
  return (
    <li
      className="task"
      key={id}
    >
      <input checked={done} type="checkbox" onChange={handleClickCheckbox} />
      <img
        className={`task_image__${done ? 'show' : 'hide'}`}
        src="./checked-svgrepo-com.svg"
        alt="checked"
        onClick={handleClickCheckbox}
      />
      <img
        className={`task_image__${done ? 'hide' : 'show'}`}
        src="./radio-button-unchecked-svgrepo-com.svg"
        alt="unchecked"
        onClick={handleClickCheckbox}
      />
      {!canChange && (
        <label className="task_label" onClick={handleClickCheckbox}>
          {name}
        </label>
      )}
      {canChange && (
        <input
          className="task_label"
          type="text"
          onChange={handleChangeChangeTask}
          value={value}
        />
      )}
      <button onClick={canChange ? handleClickSaveTask : handleClickChangeTask}>
        {canChange ? (
          <img src="./save-svgrepo-com.svg" alt="save" />
        ) : (
          <img src="./pen-svgrepo-com.svg" alt="change" />
        )}
      </button>
      <button onClick={canChange ? handleClickChangeTask : handleClickRemoveTask}>
        {canChange ? (
          <img src="./cross-svgrepo-com.svg" alt="cansel" />
        ) : (
          <img src="./delete-2-svgrepo-com.svg" alt="remove" />
        )}
      </button>
    </li>
  );
};

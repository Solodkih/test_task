import React from 'react';

import useChangeTask from './useChangeTask';
import { getUserId } from '../redux/userSlice';
import { useSelector } from 'react-redux';

export const Task = function ({ text, idTask, idUser, answer }) {
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
  ] = useChangeTask(text, answer, idTask, idUser);
  return (
    <li
      className="list-group-item mt-3 text-primary position-relative border-0 rounded-0"
      key={idTask}
    >
      <div className="d-flex pe-3 bg-body-secondary">
        <div className="d-flex align-items-start">
          <div className="position-relative d-inline start-n60px">
            <img
              className="bg-danger border border-primary border-16"
              src="./User.png"
              alt="user"
              height="120px"
              width="120px"
            />
            <div
              className="d-inline-block border-top border-end border-primary border-23 position-absolute top-50 start-100"
              style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }}
            ></div>
          </div>
        </div>
        <div className="flex-fill" style={{ marginLeft: -44 + 'px' }}>
          <div className="d-flex justify-content-start align-items-center">
            <label htmlFor={`task-${idTask}`} className="form-label mx-4 h4 mt-2">
              Задание
            </label>
          </div>
          <textarea
            type="text"
            className="form-control text-primary me-3 mb-3 rounded-0 border-0 fs-5"
            id={idTask}
            onChange={handleChangeTextTask}
            value={textValue}
            aria-describedby="task"
            disabled={!canChange}
          />
          {idUser === userId && (
            <div className="text-end">
              {canChange ? (
                <button
                  type="button"
                  className="btn btn-primary m-2 rounded-0 "
                  onClick={handleClickSaveTask}
                >
                  Сохранить
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary m-2 rounded-0"
                  onClick={handleClickChangeTask}
                >
                  Править
                </button>
              )}
              {canChange ? (
                <button
                  type="button"
                  className="btn btn-primary rounded-0"
                  onClick={handleClickChangeTask}
                >
                  Отмена
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary rounded-0"
                  onClick={handleClickRemoveTask}
                >
                  Удалить
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {answer && (
        <div className="d-flex pe-3 bg-body-secondary mt-3 text-success ps-5">
          <div className="flex-fill" style={{ marginRight: -44 + 'px' }}>
            <div className="text-end mt-3">
              <label htmlFor={idTask} className="form-label mx-4 h4">
                Комментарий от УК
              </label>
            </div>
            <textarea
              type="text"
              className="form-control border-0 text-success rounded-0 mb-4 ms-4 fs-5"
              id={idTask}
              onChange={handleChangeAnswerTask}
              value={answerValue}
              aria-describedby="task"
              disabled={true}
            />
          </div>
          <div className="d-flex align-items-start">
            <div className="position-relative d-inline start-60px">
              <div
                className="d-inline-block border-top border-end border-success border-23 position-absolute top-50 start-0"
                style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }}
              ></div>
              <img
                className="bg-danger border border-success border-16"
                src="./User.png"
                alt="user"
                height="120px"
                width="120px"
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

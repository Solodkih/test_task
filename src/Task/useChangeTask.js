import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, changeTask } from '../redux/tasksSlice';

export default function useChangeTask(text, answer, idTask) {
  const dispatch = useDispatch();

  const [textValue, setText] = useState(text);
  const [answerValue, setAnswer] = useState(answer);

  const [canChange, setChange] = useState(false);

  const handleClickRemoveTask = function (e) {
    dispatch(removeTask(idTask));
  };

  const handleClickChangeTask = function (e) {
    setChange(!canChange);
    setText(text);
  };

  const handleClickSaveTask = function (e) {
    dispatch(changeTask({ idTask, text: textValue, answer: answerValue }));
    setChange(false);
  };

  const handleChangeTextTask = function (e) {
    setText(e.target.value);
  };

  const handleChangeAnswerTask = function (e) {
    setAnswer(e.target.value);
  };

  return [
    handleClickChangeTask,
    handleChangeTextTask,
    handleChangeAnswerTask,
    handleClickRemoveTask,
    handleClickSaveTask,
    canChange,
    textValue,
    answerValue,
  ];
}

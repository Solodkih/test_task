import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { switchChecked, removeTask, changeTask } from '../redux/tasksSlice';

export default function useChangeTask(done, text, idTask) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(text);
  const [canChange, setChange] = useState(false);

  const handleClickCheckbox = function (e) {
    dispatch(switchChecked({ idTask, done: !done }));
  };

  const handleClickRemoveTask = function (e) {
    dispatch(removeTask(idTask));
  };

  const handleClickChangeTask = function (e) {
    setChange(!canChange);
    setValue(text);
  };

  const handleClickSaveTask = function (e) {
    dispatch(changeTask({ idTask, text: value }));
    setChange(false);
  };

  const handleChangeChangeTask = function (e) {
    setValue(e.target.value);
  };

  return [
    handleClickCheckbox,
    handleClickRemoveTask,
    handleClickChangeTask,
    handleClickSaveTask,
    handleChangeChangeTask,
    canChange,
    value,
  ];
}

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { switchChecked, removeTask, changeTask } from '../redux/tasksSlice';

export default function useChangeTask(done, name, id) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(name);
  const [canChange, setChange] = useState(false);

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
    dispatch(changeTask({ id, name: value }));
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

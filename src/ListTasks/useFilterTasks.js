import React, { useState } from 'react';

export default function useFilterTasks(allTasks) {
  const [filter, setFilter] = useState({ check: false, uncheck: false });
  let showTasks = allTasks;
  if (filter.check) {
    showTasks = allTasks.filter((elem) => elem.done);
  }
  if (filter.uncheck) {
    showTasks = allTasks.filter((elem) => !elem.done);
  }

  function showCheckedTask() {
    setFilter({ check: !filter.check, uncheck: false });
  }

  function showUnCheckedTask() {
    setFilter({ check: false, uncheck: !filter.uncheck });
  }

  function showAllTasks() {
    setFilter({ check: false, uncheck: false });
  }

  return [showCheckedTask, showUnCheckedTask, showAllTasks, showTasks];
}

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

  return [filter, setFilter, showTasks];
}

const urlMain = new URL('http://localhost/api/');

export async function loginFetch({ password, username }) {
  try {
    const newUrl = new URL(`login/`, urlMain);
    const response = await fetch(newUrl, {
      method: 'post',
      body: JSON.stringify({ password, username }),
    });
    if (!response.ok) throw new Error(response);
    const data = await response.json();
    if (data.success) {
      return data.idUser;
    }
  } catch (e) {
    throw new Error(e);
  }
}

export async function logoutFetch() {
  try {
    const newUrl = new URL(`logout/`, urlMain);
    const response = await fetch(newUrl, {
      method: 'post',
    });
    if (!response.ok) throw new Error(response);
    const data = await response.json();
    if (data.success) {
      return null;
    }
  } catch (e) {
    throw new Error(e);
  }
}

export async function getAllTasksFetch() {
  try {
    const newUrl = new URL(`tasks/`, urlMain);
    const response = await fetch(newUrl, {
      method: 'get',
    });
    if (!response.ok) throw new Error(response);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

export async function addTaskFetch(task) {
  try {
    const newUrl = new URL(`add/`, urlMain);
    const response = await fetch(newUrl, {
      method: 'post',
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error(response);
    const data = await response.json();
    if (data.success) {
      task.idTask = data.idTask;
      return task;
    }
  } catch (e) {
    throw new Error(e);
  }
}

export async function deleteTaskFetch({ idUser, idTask }) {
  try {
    const newUrl = new URL(`del/`, urlMain);
    const response = await fetch(newUrl, {
      method: 'post',
      body: JSON.stringify({ idUser, idTask }),
    });
    if (!response.ok) throw new Error(response);
    const data = await response.json();
    if (data.success) {
      return data.idTask;
    }
  } catch (e) {
    throw new Error(e);
  }
}

export async function changeTaskFetch(task) {
  try {
    const newUrl = new URL(`del/`, urlMain);
    const response = await fetch(newUrl, {
      method: 'put',
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error(response);
    const data = await response.json();
    if (data.success) {
      return task.text;
    }
  } catch (e) {
    throw new Error(e);
  }
}

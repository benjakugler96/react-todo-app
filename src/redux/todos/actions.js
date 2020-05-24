export const getTodosSuccess = (payload) => ({
  type: "GET_TODOS_SUCCESS",
  payload,
});

export const getTodosError = () => ({
  type: "GET_TODOS_ERROR",
});

export const getTodosLoading = () => ({
  type: "GET_TODOS",
});

export const addFav = (payload) => ({
  type: "ADD_FAV",
  payload,
});

export const completeTask = (payload) => ({
  type: "COMPLETE_TASK",
  payload,
});

export const removeTask = (payload) => ({
  type: "REMOVE_TASK",
  payload,
});

export const addNote = (payload) => ({
  type: "ADD_NOTE",
  payload,
});

export const addTask = (payload) => ({
  type: "ADD_TASK",
  payload,
});

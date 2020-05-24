import { ADD_FAV, ADD_NOTE, COMPLETE_TASK, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_SUCCESS, REMOVE_TASK } from "../constants";

const initialState = {
  todos: [],
  loading: false,
  hasFailed: false
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        loading: true,
        hasFailed: false
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload || initialState.todos,
        loading: false
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        hasFailed: true
      };
    case ADD_FAV:
      const newTodosWithFav = state.todos.map((todo) => {
        if (todo.id === payload) {
          return {
            ...todo,
            isFav: !todo.isFav
          }
        };
        return todo
      })
      return {
        ...state,
        todos: newTodosWithFav,
      }
    case COMPLETE_TASK:
      const newTodosWithCompleted = state.todos.map((todo) => {
        if (todo.id === payload) {
          return {
            ...todo,
            completed: true
          }
        };
        return todo
      })
      return {
        ...state,
        todos: newTodosWithCompleted,
      }
    case REMOVE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload)
      }
    case ADD_NOTE:
      const newTodosWithNote = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            notes: todo.notes ? [...todo.notes, payload.note] : [payload.note]
          }
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodosWithNote,
      }
    default:
      return state;
  }
};

export default todosReducer;

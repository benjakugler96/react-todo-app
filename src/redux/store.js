import { createStore, combineReducers } from "redux";
import todosReducer from "./todos/reducer";
import modalReducer from "./modal/reducer";

const reducer = combineReducers({
  todos: todosReducer,
  modal: modalReducer
});

const store = createStore(reducer);

export default store;

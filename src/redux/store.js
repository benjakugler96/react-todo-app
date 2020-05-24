import { createStore, combineReducers } from "redux";
import todosReducer from "./todos/reducer";

const reducer = combineReducers({
  todos: todosReducer
});

const store = createStore(reducer);

export default store;

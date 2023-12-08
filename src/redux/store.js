import { combineReducers, createStore } from "redux";
import { counterReducer } from "./countReducer";
import { todosReducer } from "./todosReducer";
const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer,
});
export const store = createStore(rootReducer);

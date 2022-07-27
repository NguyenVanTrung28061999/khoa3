import { combineReducers } from "redux";
import ToDoListReducer from "./ToDoListReducer";
import ToDoListEmpReducer from "./ToDoListEmpReducer";
export const rootReducer = combineReducers({
  ToDoListReducer,
  ToDoListEmpReducer
});

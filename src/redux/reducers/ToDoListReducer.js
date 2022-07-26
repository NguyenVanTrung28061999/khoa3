import { ToDoListLightTheme } from "../../JSS_StyledComponents/themes/ToDoListLightTheme";
import {
  add_task,
  check_completed,
  delete_task,
  edit_task,
} from "../types/ToDoListType";
const initialState = {
  themeToDoList: ToDoListLightTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
  editTask: { id: "task-1", taskName: "task 1", done: false },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      const updateState = [...state.taskList];
      const index = updateState.findIndex(
        (x) => x.taskName.trim() === action.newTask.taskName.trim()
      );
      if (index !== -1) {
        alert("task name already exist!");
        return;
      }
      state.taskList = [...updateState, action.newTask];
      return { ...state };
    }
    case check_completed: {
      const updateState = [...state.taskList];
      const index = updateState.findIndex((x) => x.id === action.id);

      if (index !== -1) {
        updateState[index].done = true;
      }
      state.taskList = updateState;
      return { ...state };
    }
    case delete_task: {
      const updateState = [...state.taskList];
      const index = updateState.findIndex((x) => x.id === action.id);
      if (index !== -1) {
        updateState.splice(index, 1);
      }
      state.taskList = updateState;
      return { ...state };
    }
    case edit_task: {
      return { ...state, editTask: action.task };
    }
    default:
      return { ...state };
  }
};

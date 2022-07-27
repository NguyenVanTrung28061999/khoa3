import {
  ADD_EMPLOYEE,
  add_task,
  check_completed,
  delete_task,
  edit_task,
} from "./../types/ToDoListType";

export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask,
});
export const checkCompletedAction = (id) => ({
  type: check_completed,
  id,
});
export const deleteTaskAction = (id) => ({
  type: delete_task,
  id,
});

export const editTaskAction = (task) => ({
  type: edit_task,
  task,
});

export const addEmployeeAction = (employee) => ({
  type:ADD_EMPLOYEE,
  employee
})

import { ADD_EMPLOYEE } from "../types/ToDoListType";

const initialState = {
  employees: [
    { id: 1, name: "Văn Trung", pass: true },
    { id: 2, name: "Minh Héo", pass: true },
  ],
  editEmployee: { id: 1, name: "Trung", pass: true },
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:{
        const updateEmployee = [...state.employees,action.employee];
        return {...state,employees:updateEmployee}
    }
    default:
      return { ...state };
  }
};
 
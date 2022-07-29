import { ACCEPT_EMPLOYEE, ADD_EMPLOYEE } from "../types/ToDoListType";

const initialState = {
  employees: [
    { id: 1, name: "Văn Trung", pass: false },
    { id: 2, name: "Minh Héo", pass: false },
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
    case ACCEPT_EMPLOYEE:{
      const updateEmployee = [...state.employees];
      let index = updateEmployee.findIndex(x=>x.id === action.id);
      if(index !== -1){
        updateEmployee[index].pass = !updateEmployee[index].pass
      }
      return {...state,employees:updateEmployee};
    }
    default:
      return { ...state };
  }
};
 
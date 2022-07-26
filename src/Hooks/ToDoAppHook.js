import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployeeAction, checkAcceptAction } from "../redux/actions/ToDoListAction";
import axios from "axios";
export default function ToDoAppHook() {
  let [nameEmp, setName] = useState("");
  //   lấy data từ reducer về
  let employeeList = useSelector((state) => state.ToDoListEmpReducer.employees);
  let dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    const getUserAPI =
      "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

    //Gọi API bằng axios
    // axios
    //   .get(getUserAPI)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     //Trường hợp xảy ra lỗi
    //     console.log(err);
    //     alert("Xảy ra lỗi");
    //   });
    let data = await axios.get(getUserAPI);
    console.log(data.data);
  };

  let handleChange = (e) => {
    setName({
      nameEmp: e.target.value,
    });
  };

  let handleAdd = (e) => {
    e.preventDefault();
    const employee = {
      id: Date.now(),
      name: nameEmp.nameEmp,
      pass: false,
    };
    dispatch(addEmployeeAction(employee));
  };
  let handleCheck = (id) => {
    dispatch(checkAcceptAction(id))
  };
  return (
    <div className="container">
      <h1 className="text-center">To Do App</h1>
      <div className="row">
        <div className="col-3">
          <span>Name</span>
        </div>
        <div className="col-6">
          <input onChange={handleChange} type="text" className="form-control" />
        </div>
        <div className="col-3">
          <button className="btn btn-success" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
      <h3>To Do List Pass</h3>
      <div className="row">
        <table className="table table-dark table-striped">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Pass</th>
            <th></th>
          </thead>
          <tbody>
            {employeeList.filter(x=>x.pass).map((emp, index) => {
              return (
                <tr key={index}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.pass ? "pass" : "un pass"}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleCheck(emp.id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h3>To Do List UnPass</h3>
      <div className="row">
        <table className="table table-dark table-striped">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Pass</th>
            <th></th>
          </thead>
          <tbody>
            {employeeList.filter(x=>!x.pass).map((emp, index) => {
              return (
                <tr key={index}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.pass ? "pass" : "un pass"}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleCheck(emp.id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "../components/Container";
import { Dropdown } from "./../components/Dropdown";
import { Heading1, Heading3 } from "./../components/Heading";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";
import { Table, Th, Thead, Tr } from "../components/Table";
import { connect } from "react-redux";
import { Input } from "./../components/TextField";
import {
  addTaskAction,
  checkCompletedAction,
  deleteTaskAction,
  editTaskAction,
} from "./../../redux/actions/ToDoListAction";
import { ToDoListDarkTheme } from "../themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../themes/ToDoListPrimaryTheme";
class ToDoList extends Component {
  state = {
    taskName: "",
    arrValue: [
      {
        id: 1,
        name: "Dark theme",
        theme: ToDoListDarkTheme,
      },
      {
        id: 2,
        name: "Light theme",
        theme: ToDoListLightTheme,
      },
      {
        id: 3,
        name: "Primary theme",
        theme: ToDoListPrimaryTheme,
      },
    ],
    theme: ToDoListPrimaryTheme,
  };
  deleteTask = (id) => {
    this.props.dispatch(deleteTaskAction(id));
  };

  renderTaskToDo = () => {
    return this.props.taskList
      .filter((x) => !x.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "midle" }}>{item.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(editTaskAction(item));
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(checkCompletedAction(item.id));
                }}
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.deleteTask(item.id);
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTaskToDoComplete = () => {
    return this.props.taskList
      .filter((x) => x.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "midle" }}>{item.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.deleteTask(item.id);
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container className="w-50">
          <Dropdown
            onChange={(e) => {
              const { value } = e.target;
              const item = this.state.arrValue.find((x) => x.id == value);
              if (item) {
                this.setState({
                  theme: { ...item.theme },
                });
              }
            }}
          >
            {this.state.arrValue.map((num, i) => {
              return <option value={num.id}>{num.name}</option>;
            })}
          </Dropdown>
          <Heading3>To do list</Heading3>
          <Input
            name="taskName"
            value={this.props.editTask.taskName}
            onChange={(e) => {
              this.setState({
                taskName: e.target.value,
              });
            }}
            label="Task name"
            className="w-50"
          />
          <Button
            className="ml-2"
            onClick={() => {
              let newTask = {
                id: Date.now(),
                taskName: this.state.taskName,
                done: false,
              };
              this.props.dispatch(addTaskAction(newTask));
            }}
          >
            <i className="fa fa-plus"></i> Add Task
          </Button>
          <Button className="ml-2">
            <i className="fa fa-upload"></i> Update Task
          </Button>
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading3>Task complete</Heading3>
          <Table>
            <Thead>{this.renderTaskToDoComplete()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    //So sánh nếu như props trước đó (taskEdit trước mà khác taskEdit hiện tại thì mình mới setState)
    if (prevProps.editTask.id !== this.props.editTask.id) {
      this.setState({
        taskName: this.props.editTask.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    editTask: state.ToDoListReducer.editTask,
  };
};
export default connect(mapStateToProps)(ToDoList);

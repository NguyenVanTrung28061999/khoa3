import React, { Component } from "react";

export default class UserProfile extends Component {
  state = {
    username: "",
    arr: [],
  };
  handleChangeValue = (e) => {
    let { name, value } = e.target;
    this.state.arr.push(value);
    this.setState({
      [name]: value,
    });
    console.log(this.state.arr);
  };
  render() {
    return (
      <div>
        <div class="form-group">
          <label for=""></label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
            onChange={this.handleChangeValue}
          />
          <small id="helpId" class="form-text text-muted">
            Help text
          </small>
        </div>
      </div>
    );
  }
}

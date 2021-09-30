import "./todo-list-item.css";
import React, { Component } from "react";

export default class ToDoListItem extends Component {
  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  };

  render() {
    const { label, important = false } = this.props;
    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-end"
        >
          <i className="fas fa-exclamation"></i>
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-end"
        >
          <i className="fas fa-trash"></i>
        </button>
      </span>
    );
  }
}

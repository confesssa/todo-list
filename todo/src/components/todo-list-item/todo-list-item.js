import "./todo-list-item.css";
import React, { Component } from "react";

export default class ToDoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !this.state.important,
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-end"
          onClick={this.onMarkImportant}
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
